import React, { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';

const Menu = [
  {
    id: 1,
    name: "Soaps and Cosmetics",
    link: "/#",
    subcategories: [
      { id: 1, name: "Natural Soaps", link: "/#" },
      { id: 2, name: "Pure Personal Care", link: "/#" },
      { id: 3, name: "Organic Beauty Products", link: "/#" },
      { id: 4, name: "Natural Fragrances", link: "/#" }
    ]
  },
  {
    id: 2,
    name: "Kitchen & Tableware",
    link: "/#",
    subcategories: [
      { id: 1, name: "Classic Tableware", link: "/#" },
      { id: 2, name: "Kitchen Essentials", link: "/#" }
    ]
  },
  {
    id: 3,
    name: "Indoor Planters",
    link: "/#",
    subcategories: [
      { id: 1, name: "Hydroponic Planters", link: "/#" }
    ]
  },
  {
    id: 4,
    name: "Home Decor",
    link: "/#",
    subcategories: [
      { id: 1, name: "Unique Handicrafts", link: "/#" },
      { id: 2, name: "Bamboo and Wood Products", link: "/#" },
      { id: 3, name: "Natural Aroma Candles", link: "/#" }
    ]
  },
  {
    id: 5,
    name: "Sustainable Fashion",
    link: "/#",
    subcategories: [
      { id: 1, name: "Eco-Friendly Bags", link: "/#" }
    ]
  },
  {
    id: 6,
    name: "Organic Foods and Beverages",
    link: "/#",
    subcategories: [
      { id: 1, name: "Natural Juices", link: "/#" }
    ]
  },
  {
    id: 7,
    name: "Others",
    link: "/#",
    subcategories: [
      { id: 1, name: "Liquid Cleaners", link: "/#" },
      { id: 2, name: "Ayurvedic Remedies", link: "/#" },
      { id: 3, name: "Organic Manure", link: "/#" }
    ]
  }
];
const UpperCategory = () => {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const handleMouseEnter = (id) => {
    setOpenCategoryId(id);
  };

  const handleMouseLeave = (id) => {
    if (openCategoryId === id) {
      setOpenCategoryId(null);
    }
  };

  return (
    <div className="w-full border-b border-zinc-400">
      <div className="flex justify-center items-center h-[9vh]">
        <ul className="flex items-center gap-9">
          {Menu.map((category) => (
            <li
              key={category.id}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={() => handleMouseLeave(category.id)}
            >
              <a
                href={category.link}
                className="text-md px-3 py-2 hover:text-primary duration-200 flex items-center font-semibold "
                aria-haspopup="true"
                aria-expanded={openCategoryId === category.id}
                aria-controls={`subcategory-menu-${category.id}`}
              >
                {category.name}
                <IoIosArrowDropdown
                  className={`ml-1 transition-transform duration-200 ${openCategoryId === category.id ? 'rotate-180' : ''}`}
                />
              </a>
              <ul
                id={`subcategory-menu-${category.id}`}
                className={`absolute z-[999] left-0 mt-2 bg-[#2D6A4F] text-white shadow-lg rounded-lg transition-all duration-300 ease-in-out ${
                  openCategoryId === category.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={() => handleMouseLeave(category.id)}
              >
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id}>
                    <a
                      href={subcategory.link}
                      className="block px-4 py-2 hover:bg-[#d9dfdf] hover:text-[#204b38] transition-colors duration-200 "
                    >
                      {subcategory.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpperCategory;
