import PartecipantsView from "./PartecipantsView";


const Home = async () => {
  return (
    <div className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <PartecipantsView />
    </div>
  );
};

export default Home;
