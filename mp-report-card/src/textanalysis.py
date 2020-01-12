# -*- coding: utf-8 -*-

import os
import urllib.request, json
from html.parser import HTMLParser
from azure.cognitiveservices.language.textanalytics import TextAnalyticsClient
from msrest.authentication import CognitiveServicesCredentials

subscription_key = "0216dbfe33f4479b82fd57bd9154a1cb"
endpoint = "https://bills.cognitiveservices.azure.com/"

class Bill:
    def __init__(self, title, body):
        self.title = title
        self.body = body

class MyHTMLParser(HTMLParser):

    def handle_starttag(self, tag, attrs):
        for (name, value) in attrs:
            if((name == 'lang' and value == 'EN-CA') or (name == 'class' and value == 'Section')):
                self.should_read = True
            else:
                self.should_read = False

    def handle_data(self, data):
        if(not data.isspace() and self.should_read and len(data) > 1):
            print(data)

def authenticateClient():
    credentials = CognitiveServicesCredentials(subscription_key)
    text_analytics_client = TextAnalyticsClient(
        endpoint=endpoint, credentials=credentials)
    return text_analytics_client


def all_bills():
    bills = []
    next_url = "http://api.openparliament.ca/bills/?format=json"
    while(next_url != None):
        with urllib.request.urlopen(next_url) as url:
            data = json.loads(url.read().decode())
            next_url = data['pagination']['next_url']
            bills.append(Bill(data['objects']['name']['en'], data['objects']['url']))
    return bills

def get_bill_summary(bill):
    bill_url = "http://api.openparliament.ca" + bill + "?format=json"
    with urllib.request.urlopen(bill_url) as url:
        data = json.loads(url.read().decode())
        bill_text_url = data['text_url']
        print(bill_text_url)
    with urllib.request.urlopen(bill_text_url) as url:
        html_text = url.read().decode()

    parser = MyHTMLParser()
    parser.feed(html_text)
get_bill_summary("/bills/38-1/C-357/")

def key_phrases():
    
    client = authenticateClient()

    try:
        documents = [
            {"id": "1", "language": "ja", "text": "猫は幸せ"},
            {"id": "2", "language": "de",
                "text": "Fahrt nach Stuttgart und dann zum Hotel zu Fu."},
            {"id": "3", "language": "en",
                "text": "My cat might need to see a veterinarian."},
            {"id": "4", "language": "es", "text": "A mi me encanta el fútbol!"}
        ]

        for document in documents:
            print(
                "Asking key-phrases on '{}' (id: {})".format(document['text'], document['id']))

        response = client.key_phrases(documents=documents)

        for document in response.documents:
            print("Document Id: ", document.id)
            print("\tKey Phrases:")
            for phrase in document.key_phrases:
                print("\t\t", phrase)

    except Exception as err:
        print("Encountered exception. {}".format(err))
key_phrases()

