import React, {Component} from 'react';
import './App.css';
import Issue from './Issue.js'


class ReportCard extends Component {

    render() {
      var colors = ['#ff0000', '#00ff00', '#0000ff'];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      var style = {
        'position': 'relative',
        'list-style': 'none',
        'display': 'inline-block',
        'padding': '.25rem .75rem',
        'margin': '2px',
        'border-radius': '3px',
        'background-color': 'grey',
        'color': 'white',
        'height': '20px'
      };
      return (
        <div>
            {issues.map(issue => (
              < Issue issue={issue} />
            ))}
        </div>
    )
    }
  }

export default ReportCard;


const issues = ["Abortion", "Euthanasia", "Gay Marriage", "LGBT Adoption Rights", "Gender Workplace Diversity", 
"Gender Identity", "Women in Combat", "Niqab", "Death Penalty", "Transgender Athletes", 
"Environmental Regulation", "Logging", "Animal Testing", "Plastic Product Ban", "Fracking", 
"Northern Gateway Pipeline", "Renewable Energy", "Genetically Modified Foods", "Keystone Pipeline", 
"Corporate Subsidies", "Mental Health", "Prescription Drugs", "Healthcare Funding", "Healthcare", 
"Dental Coverage", "Single-Payer Healthcare", "Healthcare Privatization", "Marijuana", "Safe Haven", 
"Welfare Drug Testing", "Taxes", "Minimum Wage", "Corporate Tax", "Welfare", "Universal Child Care", 
"Old Age Pensions", "Universal Basic Income", "Pension Tax", "Labor Unions", "Income Splitting", 
"Government Spending", "Free Trade", "Government Pensions", "Domestic Jobs", "Bonus Cap", 
"Employment Insurance", "Economic Stimulus", "Pension Premiums", "Offshore Banking", "NAFTA", 
"Tech Monopolies", "Tariffs", "Trans-Pacific Partnership", "Bitcoin", "Armed Teachers", 
"Government Surveillance", "Gun Control", "Net Neutrality", "Quebec Sovereignty", "Native Funding", 
"Drug Policy", "Whistleblower Protection", "Social Media Regulation", "National Daycare", "Commuter Rail", 
"Worker Strikes", "Energy Sector", "Flag Burning", "Senate", "CBC Funding", "Long Form Cencus", "Copyright", 
"CSA Funding", "University Tution", "Postsecondary Education", "Charter Schools", "Deporting Criminal Immigrants", 
"Citizenship Test", "Immigration Ban", "Immigrant Assimilation", "Skilled Immigrants", "Dual Citizenship", 
"Temporary Foreign Workers", "Sanctuary Cities", "Political Pary Subsidies", "Campaign Finance", 
"Prime Minister Term Limits", "Criminal Politicians", "Right of Foreigners to Vote", "Candidate Transparency", 
"Minimum Voting Age", "Electoral Reform", "Private Prisons", "Parole Hearings", "Drug Trafficking Penalties", 
"Criminal Voting Rights", "Prison Overcrowding", "Mandatory Military Service", "United Nations", 
"Foreign Elections", "Syrian Refugees", "Bill C-51", "Israel Boycott", "Foreign Aid", 
"Military Spending", "Nuclear Energy", "Public Transportation", "Commercial Drones"];