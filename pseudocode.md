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

---

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
    - alarmSet () *method*

---

START:

FUNCTION pullTime
    GET hours, minutes, seconds, day, month, year from Date constructor

    IF hours < 12
        time is AM && military hours === standard hours
    ELSE
        time is PM && military hours - 12 hours === standard hours
        
    DISPLAY time
ENDFUNCTION

FUNCTION alarmMes
    INPUT alarm hour && minute
    OUTPUT time record
END FUNCTION

WHILE current time === alarm time
    ALERT "wake up"
ENDWHILE

FOR index of month
    RETURN abbreviation of month
ENDFOR

DISPLAY date
    
//END PROGRAM