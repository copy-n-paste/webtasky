# 🎯 Web Task Manager (a.k.a. My Accidental Frontend Adventure)

> *“I don't like web design — so ignore it and focus on the chaos that actually works.”*
> – Me, every time I open this project.

---

## 🧠 What is this?

A minimal(ish) task manager built using web tech because… I don’t know why. Maybe I was possessed.
It lets you add, view, and manage tasks — with some surprising features like:

* Notifications (that *only work* if you keep the **account** page open… thanks, browser limitations)
* Firebase magic for login, storage, and reminding you of stuff you wanted to forget
* Google Login only, because why reinvent pain?

I built this just for fun. Now *you* can also enjoy it — along with all my bugs, typos, and CSS crimes. You're welcome. 🙃

---

## 🚀 Live Demo

👉 Hosted version: [Click here to try it](https://mytaskwebapp.web.app)

---

## 🛠 Tech Stack

* 🔥 Firebase (because I needed free backend help):

  * Hosting
  * Authentication (Google Sign-In)
  * Firestore Database
  * Cloud Messaging (for push notifications that show up if the moon is in retrograde and `account.html` is open)
* 🧼 HTML + CSS (I regret everything)
* 🧠 JavaScript (vanilla, no frameworks, because I hate myself)
* 🧪 Browser APIs for notification, service workers, and emotional pain

---

## 📦 How to Run It Locally

1. Clone this repo:

   ```bash
   git clone https://github.com/copy-n-paste/webtasky.git
   ```
2. Serve it however you want (`live-server`, Firebase CLI, rub two sticks together, etc.).
3. You'll need to update Firebase config if you're not me.
4. Notifications won't work unless you're on `https` and have `account.html` open. Yes, open. Don't ask.

---

## ⚠️ Important: Notifications Need `account.html` Open

Yes, really. If you want browser push notifications to appear, you must keep the `account.html` page open.
No open tab = no notification. It's not a bug, it's a vibe.

---

## 🤡 Why did I build this?

Honestly? Just for fun.
And to learn how far I can push Firebase before it sends me a cease and desist.
Now you can enjoy it too — along with **all my errors**. 🧨

---

## 🐍 Wanna Stay in Terminal?

Check out my parallel Python-based CLI version (no frontend tears involved):
👉 [MyTaskManager-Python](https://github.com/copy-n-paste/pytasky.git)

---

## 📜 License

This project is licensed under the **DWYWBDBM License**
(*Do Whatever You Want But Don’t Blame Me*)

---

## 🧃 Final Thoughts

If it works, yay.
If it breaks, blame JavaScript.
If you’re impressed… seek help. 😄
