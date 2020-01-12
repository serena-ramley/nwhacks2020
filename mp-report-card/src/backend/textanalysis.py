# -*- coding: utf-8 -*-

import os
import urllib.request, json
import get_keys
from html.parser import HTMLParser
from azure.cognitiveservices.language.textanalytics import TextAnalyticsClient
from msrest.authentication import CognitiveServicesCredentials

subscription_key = get_keys.get_azure_key()
endpoint = "https://bills.cognitiveservices.azure.com/"

class Bill:
    def __init__(self, title, body):
        self.title = title
        self.body = body

class MyHTMLParser(HTMLParser):

    def handle_starttag(self, tag, attrs):
        for (name, value) in attrs:
            if(name == 'lang' and value[:2] == 'FR'):
                self.should_read = False
            else:
                self.should_read = True
                self.tag_type = tag

    def handle_data(self, data):
        data = data + " "
        try:
            if(not data.isspace() and self.should_read and len(data) > 1):
                try:
                    self.data += data
                except:
                    self.data = data
        except:
            self.should_read = False

    def handle_endtag(self, tag):
        try:
            if(tag==self.tag_type):
                self.should_read = False
        except:
            pass

def authenticateClient():
    credentials = CognitiveServicesCredentials(subscription_key)
    text_analytics_client = TextAnalyticsClient(
        endpoint=endpoint, credentials=credentials)
    return text_analytics_client


def bill_chunks():
    bills = []
    next_url = "http://api.openparliament.ca/bills/?format=json"
    while(next_url != None):
        with urllib.request.urlopen(next_url) as url:
            data = json.loads(url.read().decode())
            next_url = data['pagination']['next_url']
            bills.append(Bill(data['objects']['name']['en'], data['objects']['url']))
    return bills

def get_docs(bill):
    """splits the bill into max 5120 character docs and doesn't split words"""
    doc_list = []
    if(len(bill)<=5120):
        return [bill]
    i = 5119
    while(bill[i] != " " and i > 0):
        i -= 1
    if(i==0):
        i = 5120

    doc_list.append(bill[:i])
    doc_list.extend(get_docs(bill[i:]))
    return doc_list



def get_bill_summary(bill):
    bill = bill[:4] + "/" + bill[5:]
    bill = bill.upper()
    bill = "/bills/" + bill
    bill_url = "http://api.openparliament.ca" + bill + "?format=json"
    print(bill_url)
    with urllib.request.urlopen(bill_url) as url:
        data = json.loads(url.read().decode())
        bill_text_url = data['text_url']
        print(bill_text_url)
    with urllib.request.urlopen(bill_text_url) as url:
        html_text = url.read().decode()

    parser = MyHTMLParser()
    parser.feed(html_text)
    bill_txt = parser.data
    bill_txt = bill_txt[:bill_txt.find("Senate House of Commons Library of Parliament Employment at Parliament Important Notices")]
    doc_list = get_docs(bill_txt)
    return key_phrases(doc_list)



def key_phrases(doc_list):
    retList = []

    client = authenticateClient()
    print(type(client))

    try:
        documents = []
        i = 1
        for d in doc_list:
            documents.append({"id": str(i), "language": "en", "text": d})
            i += 1


        for document in documents:
            print(
                "Asking key-phrases on document {}".format(document['id']))

        response = client.key_phrases(documents=documents, maxKeyPhraseCount=5)

        for document in response.documents:
            #print("Document Id: ", document.id)
            #print("\tKey Phrases:")
            document.key_phrases = document.key_phrases[:4]
            for phrase in document.key_phrases:
                #print("\t\t", phrase)
                retList.append(phrase)

    except Exception as err:
        print("Encountered exception. {}".format(err))
    return json.dumps(retList)
#get_bill_summary("/bills/42-1/C-45/")
