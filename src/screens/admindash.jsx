import "../styles/dashboard.css";
import Admin from "../assets/user.png"
import Dummy from "../assets/third.webp"

function Dashboard() {
  return (
    <div className="dashboard">
      <header>
        <h1>Welcome Admin</h1>
        <section>
          <img src={Admin} />
          <p>John Doe</p>
        </section>
      </header>

      <div className="admin-box">
        <aside className="left-nav">
          <div className="left-nav-top">
            <img src={Admin} />
            <section>
              <h1>John Doe</h1>
              <p>Admnistrator</p>
            </section>
          </div>
          <ul>
            <li id="special">Dashboard</li>
            <li>Create Article</li>
            <li>View Admin Details</li>
          </ul>
        </aside>
        <main className="admin-main">
          <h1>Dashboard</h1>

          <section>
            <div>
              <aside>
                <img src={Dummy} />
              </aside>
              <article>
              <h2>Athene Network Review – How to mine ATH Coin, Legit or Scam?</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio magnam mollitia odit assumenda veniam vitae praesentium enim id, rem nulla ipsum quia nemo error? Earum corporis quod vitae! Modi, harum.</p>
              <button type="submit">Delete</button>
              </article>
            </div>
            <div>
              <aside>
                <img src={Dummy} />
              </aside>
                <article>
                  <h2>Athene Network Review – How to mine ATH Coin, Legit or Scam?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis quis a numquam magni, sequi totam voluptatibus, consectetur sunt rem nisi iusto quisquam, odit voluptatem dolores culpa sit amet omnis.</p>
                  <button type="submit">Delete</button>
                </article>
            </div>
            <div>
              <aside>
                <img src={Dummy} />
              </aside>
                <article>
                  <h2>Athene Network Review – How to mine ATH Coin, Legit or Scam?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis quis a numquam magni, sequi totam voluptatibus, consectetur sunt rem nisi iusto quisquam, odit voluptatem dolores culpa sit amet omnis.</p>
                  <button type="submit">Delete</button>
                </article>
            </div>
            <div>
              <aside>
                <img src={Dummy} />
              </aside>
                <article>
                  <h2>Athene Network Review – How to mine ATH Coin, Legit or Scam?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis quis a numquam magni, sequi totam voluptatibus, consectetur sunt rem nisi iusto quisquam, odit voluptatem dolores culpa sit amet omnis.</p>
                  <button type="submit">Delete</button>
                </article>
            </div>
            <div>
              <aside>
                <img src={Dummy} />
              </aside>
                <article>
                  <h2>Athene Network Review – How to mine ATH Coin, Legit or Scam?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis quis a numquam magni, sequi totam voluptatibus, consectetur sunt rem nisi iusto quisquam, odit voluptatem dolores culpa sit amet omnis.</p>
                  <button type="submit">Delete</button>
                </article>
            </div>
            <div>
              <aside>
                <img src={Dummy} />
              </aside>
                <article>
                  <h2>Athene Network Review – How to mine ATH Coin, Legit or Scam?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis quis a numquam magni, sequi totam voluptatibus, consectetur sunt rem nisi iusto quisquam, odit voluptatem dolores culpa sit amet omnis.</p>
                  <button type="submit">Delete</button>
                </article>
            </div>
            <div>
              <aside>
                <img src={Dummy} />
              </aside>
                <article>
                  <h2>Athene Network Review – How to mine ATH Coin, Legit or Scam?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis quis a numquam magni, sequi totam voluptatibus, consectetur sunt rem nisi iusto quisquam, odit voluptatem dolores culpa sit amet omnis.</p>
                  <button type="submit">Delete</button>
                </article>
            </div>
            <div>
              <aside>
                <img src={Dummy} />
              </aside>
                <article>
                  <h2>Athene Network Review – How to mine ATH Coin, Legit or Scam?</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis quis a numquam magni, sequi totam voluptatibus, consectetur sunt rem nisi iusto quisquam, odit voluptatem dolores culpa sit amet omnis.</p>
                  <button type="submit">Delete</button>
                </article>
            </div>
          </section>
          
        </main>
      </div>
    </div>
  );
}


export default Dashboard;