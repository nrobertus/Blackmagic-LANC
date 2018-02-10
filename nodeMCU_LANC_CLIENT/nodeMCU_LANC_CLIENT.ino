#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "ESP8266";
const char* password = "ESP8266Test";

void setup () {
  pinMode(LED_BUILTIN, OUTPUT);     // Initialize the LED_BUILTIN pin as an output
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(1000);
    Serial.print("Connecting..");

  }

}

void loop() {

  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
    digitalWrite(LED_BUILTIN, LOW); // TURN ON THE LED. LOW? GO FIGURE.

    HTTPClient http;  //Declare an object of class HTTPClient

    http.begin("http://42.42.42.42/rec");  //Specify request destination
    int httpCode = http.GET();                                                                  //Send the request

    if (httpCode > 0) { //Check the returning code

      String payload = http.getString();   //Get the request response payload
      Serial.println(payload);                     //Print the response payload

    }

    http.end();   //Close connection

  } else {
    digitalWrite(LED_BUILTIN, HIGH); // TURN OFF THE LED
  }

  delay(1000);    //Send a request every 30 seconds

}
