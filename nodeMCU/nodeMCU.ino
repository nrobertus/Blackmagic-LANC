/*
 ESP8266 Blink by Simon Peter
 Blink the blue LED on the ESP-01 module
 This example code is in the public domain
 
 The blue LED on the ESP-01 module is connected to GPIO1 
 (which is also the TXD pin; so we cannot use Serial.print() at the same time)
 
 Note that this sketch uses LED_BUILTIN to find the pin with the internal LED
*/
// The code uses fast I/O write because its time critical,
// therefore setting pins are done by writing directly to the registers:
#define cmdPinON (digitalWrite(cmdPin, HIGH))   // Set digtal pin 7 (PD7)
#define cmdPinOFF (digitalWrite(cmdPin, LOW))  // Reset digtal pin 7 (PD7)
#define ledPin LED_BUILTIN
#define cmdPin 13
#define lancPin 15

char serialInputString[2];
int serialStrPointer = 0;

int bitDura = 98;           // Duration of one LANC bit in microseconds, orginal 104, shortened because DigitalWrite is so dang slow
int halfbitDura = 49;        // Half of bitDura
char inString[5];            // A string to hold incoming data
char outString[25];          // A string to hold outgoing data
boolean strComplete = false; // Indicator to see if the string is complete
boolean lancCmd[16];         // Array for the lancCmd in bits
boolean lancMessage[64];     // Array for the complete LANC message in bits

void setup() {
  Serial.begin(74880);        // Start serial port
  
  pinMode(cmdPin, OUTPUT);
  pinMode(ledPin, OUTPUT);
  pinMode(lancPin, INPUT);    // Listens to the LANC line, used for pulseIn function

  //digitalWrite(cmdPin, LOW);
  
  
  
  Serial.println("Welcome to the Arduino LANC-RS232 interface");
  Serial.println("Send two bytes in hex form etc. 02AF and wait for reply from camera");
}

// the loop function runs over and over again forever
void loop() 
{
  if (Serial.available())
  {
    char point = char(Serial.read());
    Serial.println(point);
  }  // End of if
  delay(50);  // I have no idea why, but most programs of this sort have a delay in.  (Hope someone explains to me too)
}  // End of function

