from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
 return render_template("form.html")

@app.route('/outcome', methods=["POST"])
def outcome():
    var_1 = request.form.get("head_title")
    var_2 = request.form.get("sub_title")
    var_3 = request.form.get("about")
    return render_template("outcome.html", head_title_here=var_1, sub_title_here=var_2, about_here=var_3)

if __name__ == "__main__":
    app.run(debug=True,port=8000)


