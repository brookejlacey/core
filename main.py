from flask import Flask, render_template
import markdown2
import os

app = Flask(__name__)

# Configuration
app.config['GA_TRACKING_ID'] = 'G-XXXXXXX123'  # Replace with actual GA4 tracking ID

@app.route("/")
def index():
    return render_template("index.html", ga_tracking_id=app.config['GA_TRACKING_ID'])

@app.route("/blog")
def blog():
    blog_posts = []
    blog_dir = os.path.join(app.root_path, 'blog_posts')
    for filename in os.listdir(blog_dir):
        if filename.endswith('.md'):
            with open(os.path.join(blog_dir, filename), 'r') as file:
                content = file.read()
                html_content = markdown2.markdown(content)
                title = filename[:-3].replace('-', ' ').title()
                blog_posts.append({'title': title, 'content': html_content})
    return render_template("blog.html", blog_posts=blog_posts, ga_tracking_id=app.config['GA_TRACKING_ID'])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
