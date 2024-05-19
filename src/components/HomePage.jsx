import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="homePage">
        <header className="header">
          <h1>Welcome to Nour's Store</h1>
          <h2>Your one-stop shop for all things random</h2>
        </header>
        <main className="content">
          <p>
            At Nour's Store, we pride ourselves on offering a diverse range of random and unique products. While we may not carry every essential item, our selection is sure to surprise and delight you. Explore our shop to find something unexpected and add a touch of randomness to your life.
          </p>
          <p>
            Our store is a treasure trove of curiosities, perfect for those who love to discover new and quirky items. Whether you're looking for a unique gift or just something to brighten your day, Nour's Store has got you covered.
          </p>
          <p>
            Don't miss out on our latest arrivals and special offers. Happy shopping!
          </p>
        </main>
        <footer className="footer">
          <p>Made by Nour</p>
        </footer>
      </div>
    </>
  );
}
