# Express SSE Demo
Simple demo on how to use express to notify the UI with server side events.

## Installation
To install
```
npm install
```
## Start Server
To run

```
npm start
```
## Testing
Open http://localhost:4000

You can test both the onMessage and addEventListener functions of the EventSource below.

### Message

To test SSE onMessage make a API request to:

POST - http://localhost:4000/sendmessage
Body (application/json)
```
{
	"message": "This is a test message"
}
```
### Event

To test SSE event listener make API request to:

POST - http://localhost:4000/sendevent
Body (application/json)
```
{
	"message": "This is a test event"
}
```