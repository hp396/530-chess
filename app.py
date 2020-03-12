#!/usr/bin/env python
from threading import Lock
from flask import Flask, render_template, session, request, \
    copy_current_request_context,request,jsonify
from flask_socketio import SocketIO, emit, join_room, leave_room, \
    close_room, rooms, disconnect
import sys
import json
from Player import Player
async_mode = None

app = Flask(__name__, static_folder='public', static_url_path='')
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)
thread = None
thread_lock = Lock()
# app.title("NOT FLASK")

def background_thread():
    """Example of how to send server generated events to clients."""
    count = 0
    while True:
        socketio.sleep(10)
        count += 1
        socketio.emit('my_response',
                      {'data': 'Server generated event', 'count': count},
                      namespace='/test')

@app.route('/')
def game():
    return render_template('menu.html', async_mode=socketio.async_mode)

@app.route('/<name>')
def generic(name):
    global PlayerA
    global PlayerB
    global winner,loser
    global numberofplayer
    if name == "menu":        
        numberofplayer = 0
        PlayerA = 0
        PlayerB = 0
        return render_template('menu.html', async_mode=socketio.async_mode)
    elif name == "resign":
        if numberofplayer == 2:
            return render_template(name + '.html',winners = winner, losers = loser, players = 2)
        elif numberofplayer ==1:
            return render_template(name + '.html',winners = winner, losers = loser, players = 1) 
        else:
            return render_template(name+'.html')
    elif name == "index":
        if numberofplayer<2:
            if PlayerA ==0:
                PlayerA = Player("White",True)
                numberofplayer=1
                return render_template(name + '.html',turn='true',name='white')
            elif PlayerB == 0:
                numberofplayer=2
                PlayerB = Player("Black",False)
                return render_template(name + '.html',turn='false',name='black',players=2)
        elif numberofplayer >=2:
            return render_template('cannotplay.html')
    else:
        return render_template(name+'.html')

@socketio.on('join', namespace='/test')
def join(message):
    join_room('1')
    session['receive_count'] = session.get('receive_count', 0) + 1  
    emit('my_response',
        {'data': 'In rooms: ' + ', '.join(rooms()),
        'count': session['receive_count']})

#May use for disconnecting player
@socketio.on('resign', namespace='/test')
def resign(message):
    global numberofplayer, PlayerA,PlayerB,winner,loser
    print(numberofplayer)
    if message['player'] == 'white':
        winner = 'black'
        loser = 'white'
    else:
        loser = 'black'
        winner = 'white'
    PlayerA = 0
    PlayerB = 0 
    session['receive_count'] = session.get('receive_count', 0) -1
    emit('my_response2',{'data': 'In rooms: ' + ', '.join(rooms()),'count': session['receive_count'],'loser':message['player'],'players':numberofplayer} ,room=message['room'])
    # numberofplayer = 0

@socketio.on('updateplayers',namespace='/test')
def updatetotalpalyers(message):
    emit('my_response3',{'data': message['players']},room=message['room'])

@socketio.on('my_room_event', namespace='/test')
def send_room_message(message):
    global PlayerA
    global PlayerB
    if PlayerA!=0 and PlayerB!=0:
        PlayerA.ismove = not PlayerA.ismove
        PlayerB.ismove = not PlayerB.ismove
        session['receive_count'] = session.get('receive_count', 0) + 1
        emit('my_response1',
             {'data': message['data'], 'count': session['receive_count']},
             room=message['room'])

if __name__ == '__main__':
    PlayerA = 0
    PlayerB = 0
    winner=0
    loser=0
    numberofplayer=0
    socketio.run(app, debug=True)
