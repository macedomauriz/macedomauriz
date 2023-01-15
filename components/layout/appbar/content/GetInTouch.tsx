import {
  faEnvelope,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import {
  Modal,
  Text,
  Input,
  Button,
  Textarea,
  Loading,
} from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm } from "react-hook-form"
import { styled } from "@nextui-org/react"

type GetInTouchProps = {
  name: string
  company: string
  email: string
  body: string
}

export const GetInTouch = () => {
  const [visible, setVisible] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetInTouchProps>()

  const [response, setResponse] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false)
  }

  const fetchData = (data: GetInTouchProps) => {
    setIsLoading(true)
    fetch("https://xbwmbypk8i.execute-api.us-east-1.amazonaws.com/prod/send", {
      method: "POST",
      headers: {
        "Content-Type": "text/html",
      },
      body: JSON.stringify({
        body: `
          <p>Name: ${data.name}</p>
          <p>Company: ${data.company}</p>
          <p>Email: ${data.email}</p>
          <p>Message: ${data.body}</p>
        `,
        subject: `${data.name} from ${data.company} at macedomauriz.com`,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setResponse(data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  const Status = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: 30,
  })

  const Error = ({ children }: { children?: string }) => {
    return (
      <Text
        color="error"
        size="$xs"
        as="span"
        css={{ minHeight: 17, marginBottom: 10 }}
      >
        {children}
      </Text>
    )
  }

  return (
    <>
      <Button auto size="xs" onPress={handler}>
        Get in touch
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text h1>Get in touch</Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            bordered
            fullWidth
            size="lg"
            placeholder="Name*"
            contentLeft={<FontAwesomeIcon icon={faUser} />}
            aria-labelledby="Name"
            animated={false}
            css={{ margin: "0 0 5px 0" }}
            {...register("name", { required: "A name is required" })}
          />
          <Error>{errors.name ? errors.name.message : " "}</Error>
          <Input
            bordered
            fullWidth
            size="lg"
            placeholder="Company"
            contentLeft={<FontAwesomeIcon icon={faBriefcase} />}
            aria-labelledby="Company"
            animated={false}
            css={{ margin: "0 0 5px 0" }}
            {...register("company")}
          />
          <Error />
          <Input
            bordered
            fullWidth
            size="lg"
            placeholder="Email*"
            contentLeft={<FontAwesomeIcon icon={faEnvelope} />}
            aria-labelledby="Email"
            animated={false}
            css={{ margin: "0 0 5px 0" }}
            {...register("email", {
              required: "An email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Invalid email format",
              },
            })}
          />
          <Error>{errors.email ? errors.email.message : " "}</Error>
          <Textarea
            bordered
            placeholder="Enter your amazing ideas*"
            size="lg"
            aria-labelledby="Body"
            animated={false}
            css={{ margin: "0 0 5px 0" }}
            {...register("body", { required: "A message is required" })}
          />
          <Error>{errors.body ? errors.body.message : " "}</Error>
        </Modal.Body>
        <Status>
          {isLoading ? (
            <Loading type="points-opacity" />
          ) : response?.message ? (
            <Text
              css={{
                color: response.statusCode === 200 ? "$green700" : "$red700",
              }}
            >
              {response.message}
            </Text>
          ) : (
            <Text
              css={{
                color: "$red700",
              }}
            >
              Server error
            </Text>
          )}
        </Status>
        <Modal.Footer>
          <Button auto onClick={handleSubmit(data => fetchData(data))}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
