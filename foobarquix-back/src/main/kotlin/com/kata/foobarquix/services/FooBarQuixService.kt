package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {

    fun convertNumber(inputNumber: Int): String {
        var retValue = ""
        var stringValue = inputNumber.toString()
        var divideByThree = isDivideByThree(inputNumber);
        var divideByFive = isDivideByFive(inputNumber);
        if(divideByThree) {
            retValue = "Foo"
        }
        if(divideByFive) {
            retValue = retValue.plus("Bar")
        }
        val chars: Array<Char> = stringValue.toCharArray().toTypedArray()
        for(char: Char in chars) {
            if(char.toString() == "3"){
                retValue = retValue.plus("Foo")
            }
            if(char.toString() == "5"){
                retValue = retValue.plus("Bar")
            }
            if(char.toString() == "7"){
                retValue = retValue.plus("Quix")
            }
        }
        if (!stringValue.contains("3") && !stringValue.contains("5") && !stringValue.contains("7") && !divideByThree
                && !divideByFive){
            retValue =  retValue.plus(stringValue)
        }
        return retValue
    }

    fun isDivideByThree(number: Int): Boolean {
        return number % 3 == 0;
    }

    fun isDivideByFive(number: Int): Boolean {
        return number % 5 == 0;
    }

}