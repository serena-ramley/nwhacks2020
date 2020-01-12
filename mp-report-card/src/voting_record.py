import urllib.request, json
from flask import Flask
app = Flask(__name__)

class MP:
    """A Member of Parliament"""
    def __init__(self, politician_url):
        self.politician_url = politician_url
        with urllib.request.urlopen("http://api.openparliament.ca" + self.politician_url) as url:
            self.data = json.loads(url.read().decode())
            self.name = self.data['name']
        self.get_vote_record()

    def get_vote_record(self):
        """"returns a lsit of votes the MP has participated in and their vote
        or a 'Didn't Vote' result"""
        vote_record = []
        next_url = "/votes/ballots/?politician=" + self.politician_url[13:] + "&limit=500&offset=0"
        while(next_url != None):
            next_url = "http://api.openparliament.ca" + next_url
            with urllib.request.urlopen(next_url) as url:
                ballot_data = json.loads(url.read().decode())
                next_url = ballot_data['pagination']['next_url']
                #next_url = None
                for bal in ballot_data['objects']:
                    vote_record.append((bal['vote_url'], bal['ballot']))
            self.vote_record = vote_record

    def get_attendance(self):
        """returns the MP's fractional attendance since they joined parliament"""
        num_absences = len(list(filter(lambda x : x[1] == "Didn't vote", self.vote_record)))
        return 1 - num_absences/len(self.vote_record)

@app.route('/get_attendance/<name>')
def get_MP_attendance(name):
    ret = MP("/politicians/" + name).get_attendance()
    return str(ret)

app.run()
