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
def index():
    return render_template('menu.html', async_mode=socketio.async_mode)

app.route('/index')
def game(name):
    return render_template('index.html')

@app.route('/<name>')
def generic(name):
    global PlayerA
    global PlayerB
    if name == "index":
        
        global numberofplayer
        if numberofplayer<2:
            numberofplayer+=1
            if PlayerA ==0:
                PlayerA = Player("White",True)
                return render_template(name + '.html',turn='true',name='white')
            elif PlayerB == 0:
                PlayerB = Player("Black",False)
                return render_template(name + '.html',turn='false',name='black')
        else:
            return render_template('cannotplay.html')
    else:
        return render_template(name+'.html')

@socketio.on('join', namespace='/test')
def join(message):
    join_room(message['room'])
    session['receive_count'] = session.get('receive_count', 0) + 1  
    emit('my_response',
        {'data': 'In rooms: ' + ', '.join(rooms()),
        'count': session['receive_count']})

#May use for disconnecting player
# @socketio.on('leave', namespace='/test')
# def leave(message):
#     leave_room(message['room'])
#     session['receive_count'] = session.get('receive_count', 0) + 1
#     emit('my_response1',
#          {'data': 'In rooms: ' + ', '.join(rooms()),
#           'count': session['receive_count']})
# @socketio.on('disconnect', namespace='/test')
# def test_disconnect():
#     print('Client disconnected', request.sid)

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

#USELESS
#@socketio.on('my_ping', namespace='/test')
#def ping_pong():
 #   emit('my_pong')
    
#@app.route('/postmethod', methods = ['POST'])
#def get_post_javascript_data():
 #   if request.method == "POST":
  #      jsdata = json.loads(request.form['javascript_data'])
   # gamepiece = jsdata[0]['piece']
    #current_loc = jsdata[0]['current_loc']
    #new_loc = jsdata[0]['new_loc']
    #return jsonify(gamepiece,current_loc,new_loc)

if __name__ == '__main__':
    PlayerA = 0
    PlayerB = 0
    numberofplayer=0
    socketio.run(app, debug=True)
