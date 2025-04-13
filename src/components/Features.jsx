import global from "../assets/global.svg";
// Title Cards
const features = [
  { title: "Access up to $100,000", desc: "We fund each invoice once approved and collect payment to optimise your cash flow.*" },
  { title: "you choose invoices to get paid", desc: "self-serve online portal available 24/7 or connect from your CRM or invoicing platform." },
  { title: "Simple pricing", desc: "Only pay for what you use, if you don't need us, there are no costs." },
  { title: "Click and quick", desc:" We fund each invoice once approved and collect payment to optimise your cash flow.*" },
  { title: "Flexible", desc: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform." },
  { title: "Invest in your business", desc: "Only pay for what you use, if you don't need us, there are no costs." },
];

export default function Features() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-5xl font-inter font-bold mt-10 mb-5">Outsource payment collection</h2>
      <h2 className="text-s font-inter text-gray-500 mb-15">Faster and flexible access to cash flow from one or all your invoices</h2>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-3 text-center mx-25 gap-5">
        {features.map((f, i) => (
          <div key={i} className="bg-white font-inter p-6 rounded hover:shadow-lg transition mb-20">
            <img src={global} alt="Global" className="w-12 h-12 mb-10 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
