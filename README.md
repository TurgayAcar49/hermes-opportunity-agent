# 🚀 Hermes Opportunity Analyzer Agent
Built for the Hermes AI Agent Hackathon
An autonomous Hermes agent that discovers monetizable startup opportunities from real user pain points.

## What It Does
- Scans Reddit discussions
- Detects recurring problems
- Identifies payment intent signals
- Scores opportunities (0–100)
- Generates startup-ready reports

## Agent Flow

User Input  
↓  
Reddit Search Tool  
↓  
Problem Clustering  
↓  
Payment Intent Detection  
↓  
Scoring Engine  
↓  
Opportunity Report  

## Example Input

"Freelancers struggle to recover unpaid invoices from clients"

## Example Output

Opportunity: Freelancer Invoice Recovery SaaS  
Score: 82/100  

Why:
- 120+ mentions in 30 days  
- High frustration  
- Clear willingness to pay  
- Weak existing solutions  

## How It Works

1. The agent searches Reddit discussions using the Hermes tool system.
2. It clusters repeated user problems.
3. It detects payment intent signals.
4. A scoring engine evaluates opportunity strength.
5. The agent generates a structured opportunity report.

## Built With
Hermes Agent Tool Chaining  
Structured JSON outputs  
Custom scoring logic  

## Installation

git clone https://github.com/hermes-agent-lab/hermes-opportunity-agent
cd hermes-opportunity-agent

pip install -r requirements.txt

## Run the Agent

python main.py


## Demo

Example structured opportunity analysis can be found in:

demo_output.json

This file shows how the Hermes Opportunity Agent evaluates real-world problems and generates startup opportunity reports.
