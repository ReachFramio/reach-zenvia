const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-green-35">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Zenvia For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Zenvia for Footwear Design is built for the footwear industry ecosystem, from concept design to retail sell-in.
        </p>

        {/* Bag brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Footwear brands and manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Brands and factories can standardize tech packs, catalogues, and product documentation across different product lines. This ensures consistency and improves communication with buyers and partners.
            </li>
          </ul>
        </div>

        {/* Designers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design and product development teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Designers and product teams can clearly present construction details, materials, and specifications using structured layouts that factories can easily understand.
            </li>
          </ul>
        </div>

        {/* E-commerce */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Sourcing and merchandising teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Merchandising teams can create line sheets and assortment plans that include pricing, quantities, and product variations in a clear format for better decision-making.
            </li>
          </ul>
        </div>

        {/* Corporate gifting */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Sales teams and distributors
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Sales teams can prepare catalogues, price lists, and presentations tailored for different regions and clients, helping improve product communication and sales.
            </li>
          </ul>
        </div>

        {/* OEM / ODM */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Safety and specialised footwear companies
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Companies dealing with safety, industrial, or orthopaedic footwear can present technical details, certifications, and compliance information clearly alongside product visuals.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Retailers and private label businesses
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Retailers can create branded documentation for sourcing, product comparison, and private-label collections while maintaining consistent visual standards.
            </li>
          </ul>
        </div>
        

      </div>
    </section>
  );
};

export default WhoIsThisFor;
