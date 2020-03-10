from  selenium import webdriver
import Convertor
import sys
from selenium.webdriver.common.action_chains import ActionChains
import time 

driver = webdriver.Chrome(executable_path=r'C:/Users/Harsh/Documents/GitHub/C.H.E.S.S--Game/Selenium/drivers/chromedriver.exe')
driver.set_page_load_timeout(10)
driver.get("http://127.0.0.1:5000/")


def pawnpromotion(promote):
    obj = driver.switch_to.alert
    time.sleep(1)
    obj.send_keys(promote)
    time.sleep(1)
    obj.accept()
    print(promote)


def joingame():
    driver.find_element_by_class_name("btn").click()

def skipturn():
    driver.find_element_by_id("skipturn").click()

def pawnMovement(id1,id2):
    menu = driver.find_element_by_id(id1)
    menu.click()

    try1 = driver.find_element_by_id(id2)
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # if(try1.get_attribute('src') == None):
    #     print("passed")
    # else:
    #     print("failed")

def knightMovement(id1,id2):
    print("KnightCheck")
    menu = driver.find_element_by_id(id1)
    menu.click()

    try1 = driver.find_element_by_id(id2)
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # if(try1.get_attribute('src') != "Pieces/White/wN.png"):
    #     print("passed")
    # else:
    #     print("failed")

def bishopMovement(id1,id2):
    print("BishopCheck")
    menu = driver.find_element_by_id(id1)
    menu.click()

    try1 = driver.find_element_by_id(id2)
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # if(try1.get_attribute('src') != "http://127.0.0.1:5000/Pieces/White/wB.png"):
    #     print("passed")
    # else:
    #     print("failed")

def rookMovement(id1,id2):
    print("Rook Test Cases")

    menu = driver.find_element_by_id(id1)
    menu.click()

    try1 = driver.find_element_by_id(id2)
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # if(try1.get_attribute('src') != ""):
    #     print("passed")
    # else:
    #     print("failed")
    
def kingMovement(id1,id2):
    print("King Test Cases")

    menu = driver.find_element_by_id(id1)
    menu.click()

    try1 = driver.find_element_by_id(id2)
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

    # if(try1.get_attribute('src') != ""):
    #     print("passed")
    # else:
    #     print("failed")

def queenMovement(id1,id2):
    print("Queen Test Cases")

    menu = driver.find_element_by_id(id1)
    menu.click()

    try1 = driver.find_element_by_id(id2)
    actions = ActionChains(driver)
    actions.move_to_element(menu)
    actions.click(try1)
    actions.perform()

joingame()

#White turn
pawnMovement("76","56")
skipturn()
#Black turn
pawnMovement("25","45")

skipturn()
#White turn
pawnMovement("56","46")
skipturn()
#Black turn
pawnMovement("27","37")



skipturn()
#White turn
pawnMovement("46","37")         #Capture pawn

skipturn()
#Black turn
pawnMovement("24","44")

skipturn()
#White turn
knightMovement("87","66")

skipturn()
#Black turn
pawnMovement("44","54")

skipturn()
#White turn
knightMovement("66","45")           #Capture Pawn

skipturn()
#Black turn
pawnMovement("54","64")

skipturn()
#White turn
pawnMovement("75","65")

skipturn()
#Black turn
pawnMovement("26","37")             #Capture white pawn

skipturn()
#White turn
bishopMovement("86","64")           #Capture black pawn

skipturn()
#Black turn
pawnMovement("37","47")

skipturn()
#White turn
knightMovement("45","33")

skipturn()
#Black turn
knightMovement("12","33")           #Capture white knight


skipturn()
#White turn
bishopMovement("64","28")

skipturn()
#Black turn
rookMovement("18","28")         #Capture white bishop

skipturn()
#White turn
pawnMovement("77","57")

skipturn()
#Black turn
bishopMovement("13","57")

skipturn()
#White turn
queenMovement("84","57")    #caputre black bishop

skipturn()
#Black turn
pawnMovement("21","41")

skipturn()
#White turn
queenMovement("57","47")

skipturn()
#Black turn
queenMovement("14","47")    #capture white queen

skipturn()
#White turn
pawnMovement("74","64")

skipturn()
#Black turn
#pawnMovement("41","51")     #BUGGGGG
knightMovement("33","54")

skipturn()
#White turn
bishopMovement("83","74")

skipturn()
#Black turn
pawnMovement("41","51")

skipturn()
#White turn
pawnMovement("65","54")

skipturn()
#Black turn
rookMovement("11","41")

skipturn()
#White turn
bishopMovement("74","41")

skipturn()
#Black turn
rookMovement("28","48")

skipturn()
#White turn
rookMovement("88","87")

# time.sleep(1)
skipturn()
#Black turn
# kingMovement("15","14")         #BUGGG
bishopMovement("16","27")
# # pawnMovement
# # kingMovement("15","25")     #BUGGG  


skipturn()
#White turn
rookMovement('87','47')

skipturn()
#Black turn
rookMovement('48','47')

skipturn()
#White turn
knightMovement('82','63')

skipturn()
#Black turn
# rookMovement('47','87')

#DOesnt pop up check!!!

rookMovement('47','77')

skipturn()
#White turn
pawnMovement('71','61')

skipturn()
#Black turn
rookMovement('77','73')

skipturn()
#White turn
rookMovement('81','71')

skipturn()
#Black turn
bishopMovement('27','16')

skipturn()
#White turn
bishopMovement('41','32')


skipturn()
#Black turn
bishopMovement('16','61')

##KING MOVE BUG HERE


skipturn()
#White turn
pawnMovement('72','62')

skipturn()
#Black turn
rookMovement('73','71')


rookMovement('71','73')
bishopMovement('61','43')
pawnMovement('51','61')
pawnMovement('61','71')

skipturn()
#White turn
knightMovement("63","82")

skipturn()
#Black turn

pawnMovement('71','81')
pawnpromotion('rook')

rookMovement('81','82')


# skipturn()
# #Black turn
# rookMovement('81','82')
# skipturn()

#should be checkmate

#BUG if you just click ok in pawn promotion

# 3 BUGS/ 1) KING MOVE BUG WHERE KING CAN check each other, 2) no check pop up, cant test check, 3) not a bug, but pawn promotion doesnt require an input
#bug 1 and 2 dont happen if the game is played between 2 players