import './contac.css'

const contact = () => {
    return (
    <main>
        <div>
        <h1>How can we help?</h1>
        </div>
    <form action="" method="post">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
        </div>
        <div>
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
        </div>
        <div>
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
        </div>
        <div>
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
        </div>
        <div class="button">
            <button type="submit">Submit</button>
        </div>
    </form>
    </main>
    )
  }


export default contact