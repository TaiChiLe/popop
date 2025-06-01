import Body from './components/Body';
import Create from './components/Create';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Body max={100} min={0} />
      </main>
      <Create></Create>
      <div className="mb-16 mt-4">
        <Footer />
      </div>
    </div>
  );
}
