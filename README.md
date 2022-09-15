# alarm-clock
A webpage that displays an alarm clock, in a digital display format.

## Requirements
Display the current time in a digital clock format
Display in this format: (Hours:Minutes:Seconds) (counting up to something within the same day) and (Day-Month-Year) if applicable (counting up to something on a different day)
Pick a time to make the alarm go off (this can be done as a variable)
Make sure the clock updates every second without refreshing the page
Start the alarm when the difference between the current time and the time the alarm is set for reaches 0 (Tip: use a javascript alert, you do not need it to make noise)
## Stretch Goals
Add the date (day, month, and year)
Add a button for toggling between a 12-hour and a 24-hour display
Have a button to snooze the alarm for 5 minutes
Have a toggle to turn on or off the alarm (I only wake up at 6 on the weekdays, but turn off my alarm on the weekend)
Allow the user to pick a time for the alarm to go off using an HTML datetime Input element
Change the font for the display; a mono-spaced font would look more like a digital clock
Play an audible alert when the alarm goes off
Make it look like an analog clock
Share links and resources from this week to the #help slack channel

## Use Case: 
I need to know what time it is and be able to set an alarm for importat reminders.

---

## Definitions

### What is a clock?
- A device that displays current time in hours, minutes, and seconds
- There are 24 hours in a day
    - 12 hours AM and 12 hours PM
- Each hour is composed of 60 minutes
- Each minute is composed of 60 seconds

### What is an alarm?
A notification once a particular time (hours, minutes, and seconds) are realized

## INIT - Clock Variables
- Time *class*
    - hours
        - Properties:
            - duration: 60 minutes
            - perDay: 24
    - minutes
        - Properties
            - duration: 60 seconds 
            - perDay: 1,440
    - seconds
        - Properties
            - perDay: 86,400
    - alarm () *method*

Determing the current time in a digital clock format (Hours:Minutes:Seconds) and (Month-Day-Year) if applicable. 
It should count up, incrementing the seconds and update every second without refreshing
Pick a time to make the alarm go off (this can be done as a variable) 
Start the alarm when the difference between the current time and the time the alarm is set for reaches 0 
(Tip: use a javascript alert, you do not need it to make noise)

---
START:

GET time from source

FOR every second in a minute
    
DISPLAY time

FUNCTION set alarm
    Select alarm hour
    Select AM/PM
    Submit alarm request
    WHILE alarm = set 
        count down to time = alarm
    ENDWHILE
END FUNCTION
    
//END PROGRAM