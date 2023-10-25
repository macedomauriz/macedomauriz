import boto3
import json


def lambda_handler(event, context):
    client = boto3.client("ses")
    event_body = json.loads(event["body"])

    subject = event_body["subject"]
    body = event_body["body"]
    message = {"Subject": {"Data": subject}, "Body": {"Html": {"Data": body}}}
    response = client.send_email(
        Source="rodrigo@macedomauriz.com",
        Destination={"ToAddresses": ["rodrigo1987macedo@gmail.com"]},
        Message=message,
    )
    return response
