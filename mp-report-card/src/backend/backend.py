from flask import Flask
app = Flask(__name__)
import voting_record
import textanalysis

@app.route('/get_attendance/<name>')
def get_vr(name):
    return voting_record.get_MP_attendance(name)

@app.route('/summarize_bill/<name>')
def analyze_bill(name):
    #return name
    return textanalysis.get_bill_summary(name + "/")

app.run()
