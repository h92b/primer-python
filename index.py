from flask import Flask, jsonify, request, render_template, url_for, redirect
import os, hashlib, json

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')
    
jls_extract_var = '/error'
@app.route(jls_extract_var)
def error():
    return render_template('error.html')
    
jls_extract_var = '/tools'
@app.route(jls_extract_var)
def tool():
    return render_template('tools.html')
    
jls_extract_var = '/hobbits'
@app.route(jls_extract_var)
def hobbit():
    return render_template('hobbits.html')
    
jls_extract_var = '/acercade'
@app.route(jls_extract_var)
def acerca():
    return render_template('acerca.html')

@app.route('/api', methods=['POST'])
def usersFetch():
    if request.method == 'POST':
        data = request.get_json()
        pathname = data['pathname']
        def formu(a):
            dir_img = 'static/img/carousel'
            if not os.path.exists(dir_img): 
                os.makedirs(dir_img)
            new_files = os.listdir(dir_img)
            sectionsList = 0
            if len(new_files) > 3:
                sectionsList = ( len(new_files) // 2 )
                new_files[0:sectionsList]
            return json.dumps( { "img": new_files[0:sectionsList], "list": sectionsList } );
        def swi(pathname):
            sw = {
                'home' : formu('index.txt'),
                'about' : render_template('about.txt'),
                'tools' : render_template('tools.txt'),
                'hobbits' : render_template('hobbits.txt'),
                'acercade' : render_template('acercade.txt'),
            }.get(pathname)
            return sw
        return swi(pathname)
   
def error(error):
    # return render_template('error.html'), 404
    return redirect(url_for('error'))
    
if __name__ == '__main__': 
    app.register_error_handler(404, error)
    app.run(debug=True)