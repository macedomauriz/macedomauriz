const AWS = require("aws-sdk")

const ses = new AWS.SES({ region: "us-east-1" })

exports.handler = async event => {
  const params = {
    Destination: {
      ToAddresses: ["rodrigo@macedomauriz.com", event.email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: event.body,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: event.subject,
      },
    },
    Source: "rodrigo@macedomauriz.com",
  }

  try {
    const data = await ses.sendEmail(params).promise()
    console.log(data)
    return {
      statusCode: 200,
      message: "Thanks for submitting your request!",
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      message: "Server error",
    }
  }
}
