import boto3
import json


def lambda_handler(event, context):
    client = boto3.client("ses")
    event_body = json.loads(event["body"])
    my_email = "rodrigo@macedomauriz.com"

    subject = event_body["subject"]
    body = event_body["body"]
    email = event_body["email"]

    message = {"Subject": {"Data": subject}, "Body": {"Html": {"Data": body}}}
    response = client.send_email(
        Source=my_email, Destination={"ToAddresses": [my_email, email]}, Message=message
    )
    return response
