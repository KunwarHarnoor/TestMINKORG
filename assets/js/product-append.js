document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
          name: "Wheatgrass Juice",
          categories: ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies", "Cancer", "WeightLoss"],
          price: "1.34",
          details: "Wheatgrass juice is a beverage made from the freshly sprouted leaves of the common wheat plant Triticum aestivum It is typically consumed for its purported health benefits as it is packed with a variety of nutrients including vitamins minerals amino acids and enzymes Known for its high chlorophyll content wheatgrass juice is believed to have detoxifying properties and is often touted as a natural way to boost the immune system improve digestion and enhance overall well being",
          image: "https://img.freepik.com/premium-photo/poring-shot-wheatgrass-juice-glass-uhd-wallpaper_871881-47180.jpg?w=360"
        },
        {
          name: "Whole Wheat Aata Organic",
          categories: ["WellBeing","Infections","Cancer"],
          image: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/bowls-of-flour.jpg",
          price: "70",
          details: "Whole wheat aata also known as whole wheat flour is a type of flour made from grinding entire wheat grains This includes the bran germ and endosperm which makes it more nutritious than refined white flour Whole wheat aata is rich in fiber vitamins particularly B vitamins minerals such as iron magnesium and selenium and antioxidants"
        },
        {
          name: "CTC Stevia Tea",
          categories: ["Diabetes"],
          image: "",
          price: "",
          details: "Aata gur biscuit is a traditional Indian cookie made using whole wheat flour (aata) and jaggery (gur) It is a healthier alternative to regular biscuits as it incorporates the nutritional benefits of whole wheat and the natural sweetness of jaggery These biscuits are often flavored with ingredients like cardamom nuts and ghee They are popular for their unique taste and are often enjoyed with tea or as a snack"
        },
        {
            name: "Aata Gur Biscuit Organic",
            categories: [""],
            image: "https://2.wlimg.com/product_images/bc-full/2021/11/1305039/gur-atta-biscuits-1636953042-6077657.jpeg",
            price: "100",
            details: ""
          },
          {
            name: "Special Basmati Rice Organic",
            categories: ["Digestion","Allergies"],
            image: "https://images.pexels.com/photos/15879426/pexels-photo-15879426/free-photo-of-texture-of-white-rise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            price: "207.5",
            details: "Basmati rice is a long-grain aromatic rice variety primarily grown in the Indian subcontinent It is known for its distinct fragrance and delicate flavor which sets it apart from other rice varieties Basmati rice has a light fluffy texture when cooked with each grain remaining separate It is commonly used in dishes like biryani pilaf and as an accompaniment to various curries and gravies"
          },
          {
            name: "Wheat Dalia Organic",
            categories: [""],
            image: "https://img.freepik.com/premium-photo/gehu-dalia-daliya-also-known-as-cracked-broken-wheat-served-bowl-spoon_466689-5226.jpg?w=360",
            price: "35",
            details: "Wheat daliya is a type of cereal made from cracked or broken wheat grains It is highly nutritious and is often used to prepare healthy meals such as porridge soups and salads Wheat daliya is rich in fiber vitamins and minerals making it a popular choice for breakfast or a light meal It is known for its chewy texture and nutty flavor which pairs well with both sweet and savory ingredients"
          },
          {
            name: "Amla Murabba",
            categories: ["Digestion", "LiverSupport","HighBP", "Infections"],
            image: "https://img.freepik.com/free-photo/berries-green-gooseberry_658428-213.jpg?t=st=1722673739~exp=1722677339~hmac=08b3b24a75653ce4c5c4c912dc191b7a9701ef460a3b2361b7b9fcefc850e5ac&w=360",
            price: "400",
            details: "Amla Murabba is a traditional Indian preserve made from amla or Indian gooseberry It is prepared by cooking amla in sugar or jaggery syrup until it becomes a sweet and tangy preserve Amla murabba is known for its high vitamin C content and is often consumed for its potential health benefits including boosting the immune system and aiding digestion"
          },
          {
            name: "Raw Honey ",
            categories: ["SkinIssues", "WellBeing", "Digestion","Arthritis", "Diabetes","Infections","Cancer"],
            image: "https://img.freepik.com/free-photo/high-angle-wooden-honey-dipper-jar-honey_23-2149442354.jpg?t=st=1722673978~exp=1722677578~hmac=478f756fba49c872f35722c920aa82caa95a1eae8c15f49f61fe215e8f146df4&w=360",
            price: "340",
            details: " Raw honey is honey that has not been heated or processed It retains all its natural enzymes vitamins and minerals making it a nutrient-dense sweetener It is often used as a natural alternative to refined sugar and can be added to teas or used in cooking and baking Raw honey is also valued for its potential health benefits including its antibacterial and anti-inflammatory properties"
          },
          {
            name: "Haldi Organic",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "Cancer"  ],
            image: "https://img.freepik.com/free-photo/flat-lay-spoon-with-turmeric-with-copy-space_23-2148426094.jpg?t=st=1722674097~exp=1722677697~hmac=ed1d76200c8c78a859c5c573fdf30f7d5deb0e3ae4fb180e6fdd24548da723bd&w=360",
            price: "50",
            details: "Haldi Organic Haldi organic refers to organic turmeric which is a bright yellow spice derived from the root of the turmeric plant Curcuma longa It is commonly used in cooking for its distinctive flavor and color Turmeric is also known for its potential health benefits including its anti-inflammatory and antioxidant properties"
          },
          {
            name: "Peanut Butter",
            categories: [""],
            image: "https://img.freepik.com/free-photo/raw-organic-almond-butter-dark-background_1150-45174.jpg?t=st=1722674276~exp=1722677876~hmac=79ecb8488ceec7c91715dae98c1949924a2c1cd4fe97a8aa70efc4fbefe18e7d&w=360",
            price: "320",
            details: "Peanut butter is a spread made from ground roasted peanuts It is commonly used as a topping for bread or as an ingredient in various recipes It can be smooth or chunky and is often enjoyed for its rich nutty flavor and creamy texture Peanut butter is also a good source of protein and healthy fats"
          },
          // {
          //   name: "Wheatgrass Sown Tray",
          //   categories: ["SkinIssues","WellBeing", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections","KidneyIssue","Cancer" ],
          //   image: "",
          //   price: "",
          //   details: ""
          // },
          {
            name: "Wheat Seeds Organic",
            categories: [""],
            image: "https://img.freepik.com/premium-photo/spoon-with-wheat-grains-it-spoon-with-wheat-background_163892-13259.jpg?w=360",
            price: "",
            details: "Wheat seeds organic are seeds from wheat plants that have been grown without synthetic pesticides or fertilizers They are used for planting to grow wheat or for consumption as a nutritious food source Organic wheat seeds retain their natural nutritional profile and are often preferred for their environmental and health benefits"
          },
          {
            name: "Stevia Drops",
            categories: [""],
            image: "",
            price: "50",
            details: ""
          },
          {
            name: "Sprouts Organic",
            categories: ["SkinIssues","WellBeing", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections","KidneyIssue","Cancer","Digestion"],
            image: "https://img.freepik.com/free-photo/closeup-sprouted-arugula-grow-wet-linen-mat_127675-2568.jpg?t=st=1722674589~exp=1722678189~hmac=7b9a2de9f764e2912c11b7ae6444a8e202c8d63235112b6252a480af72ffa461&w=360",
            price: "20",
            details: "Sprouts organic are young plants that have just begun to grow from seeds These sprouts are cultivated without synthetic chemicals and are valued for their high nutrient content including vitamins minerals and antioxidants Organic sprouts can be added to salads sandwiches and various dishes for a fresh and crunchy texture"
          },
          {
            name: "Rose Sharbat",
            categories: ["SkinIssues","WellBeing","Digestion"],
            image: "https://img.freepik.com/free-photo/roselle-juice-ready-drink-glass_1150-26240.jpg?t=st=1722674743~exp=1722678343~hmac=3fb37926bfb1413efffc05af2a769ac0bd5f836fe802bcab9dc71eef2dd66ea9&w=360",
            price: "300",
            details: "Rose sharbat is a sweet and fragrant drink made from rose petals and sugar It is often enjoyed as a refreshing beverage and is known for its delicate floral flavor Rose sharbat is sometimes used as a base for cocktails or mixed with water or soda for a refreshing drink"
          },
          {
            name: "White Honey",
            categories: ["SkinIssues","WellBeing", "Arthritis", "Diabetes", "Infections","Cancer","Digestion"],
            image: "https://i0.wp.com/suseteestrela.com/wp-content/uploads/2019/04/Mel-2.jpg?w=948&ssl=1",
            price: "",
            details: "White honey is honey that is light in color and has a mild sweet flavor It is produced by bees that collect nectar from specific types of flowers White honey is often valued for its delicate taste and smooth texture and can be used in a variety of culinary applications including as a sweetener in beverages and recipes"
          },
          {
            name: "A2 Desi Ghee",
            categories: ["SkinIssues",  "Digestion", "Arthritis","Infections", "KidneyIssue", "ThyroidImbalance", "Allergies", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Jaggery",
            categories: ["WellBeing", "Digestion"],
            image: "https://img.freepik.com/free-photo/delicious-jaggery-still-life-composition_23-2149161614.jpg?t=st=1722675048~exp=1722678648~hmac=a2d75ab3509a85f696aa0e2d91c24afe35abbb7e1c8093c6f47c39e230726d4b&w=360",
            price: "50",
            details: "Jaggery is a traditional unrefined sugar made from the sap of sugarcane or palm trees It is commonly used in cooking and baking as a natural sweetener Jaggery has a distinct caramel-like flavor and retains some of the natural nutrients from the source plant including minerals like iron and calcium"
          },
          {
            name: "Laung",
            categories: [""],
            image: "https://img.freepik.com/free-photo/high-angle-clove-wooden-spoon_23-2148426084.jpg?t=st=1722675108~exp=1722678708~hmac=304a8ff199b1ee04810ae6a15c9072f7e1fcfd9ac7f5bf34cceac6cb6307be35&w=360",
            price: "200",
            details: " Laung also known as cloves are aromatic flower buds used as a spice in cooking They have a warm and sweet flavor with a hint of bitterness Cloves are often used in both sweet and savory dishes and are also valued for their potential medicinal properties including their antimicrobial and anti-inflammatory effects"
          },
          {
            name: "Epsom Salt",
            categories: ["HighBP"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Ashwagandha Powder",
            categories: ["WellBeing", "ThyroidImbalance"],
            image: "https://img.freepik.com/free-photo/spoon-with-fine-powder-leaves_23-2148774965.jpg?t=st=1722675237~exp=1722678837~hmac=13e699ed6d2e498f16a1966d5afb28119b0f09f0f6b369fd422b5706714619da&w=360",
            price: "130",
            details: "Ashwagandha powder is a powdered form of the ashwagandha root an adaptogenic herb used in traditional Indian medicine It is known for its potential stress-reducing and mood-stabilizing effects Ashwagandha powder is often added to smoothies teas or taken as a supplement for overall wellness"
          },
          {
            name: "Kundi Sota",
            categories: [""],
            image: "https://vernacularfurnitureofindia.com/wp-content/uploads/2021/04/HAm_Ram_Res4_Obj_MPe_KiS_1-1.jpg",
            price: "750",
            details: "Kundi sota is a traditional Indian tool used for grinding and preparing various food ingredients It is typically made from stone and used for tasks such as grinding spices and making pastes Kundi sota is valued for its ability to produce finely ground ingredients with a distinct texture"
          },
          {
            name: "Neem Khaad",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Fresh Salad",
            categories: [ "Digestion", "LiverSupport", "Arthritis","Infections","Cancer"],
            image: "https://img.freepik.com/free-photo/top-view-salad-with-onions-feta-cheese_1220-323.jpg?t=st=1722675440~exp=1722679040~hmac=5f1deef2f7607bf3be598f2a05b11f8ade501799e5fface5151186ea074473ee&w=360",
            price: "50",
            details: "Fresh salad is a dish made from a variety of raw vegetables and fruits often served with a dressing It is valued for its crisp texture and nutritional benefits including vitamins and fiber Fresh salads can be customized with various ingredients and are a popular choice for a healthy meal or side dish"
          },
          {
            name: "Multi Grain Flour",
            categories: ["Diabetes", "Digestion","HighBP","Allergies"],
            image: "https://img.freepik.com/free-photo/stashed-flour-used-cooking_23-2149517175.jpg?t=st=1722675487~exp=1722679087~hmac=91a27d77c0bb68a5ceb17a1c1f4621f60a4e04f910e816026b35f40055451cf8&w=360",
            price: "80",
            details: "Multi grain flour is a type of flour made from a blend of different grains such as wheat barley millet and oats It provides a range of nutrients and flavors that single-grain flours may lack Multi grain flour is often used in baking and cooking to add nutritional diversity and enhance the flavor profile of various dishes"
          },
          {
            name: "Shakker",
            categories: ["WellBeing", "Digestion"],
            image: "https://img.freepik.com/free-photo/healthy-jaggery-still-life-composition_23-2149161604.jpg?t=st=1722674519~exp=1722678119~hmac=cea555bfac311e36fe658116ab95f360237975e74241fce40cdb766adff4b572&w=360",
            price: "70",
            details: "Shakker is a term used to refer to a traditional sweetener made from natural sources like sugarcane or date palm sap It is used in cooking and baking as a natural alternative to refined sugars Shakker is valued for its rich flavor and potential nutritional benefits compared to processed sweeteners"
          },{
            name: "Black Chana",
            categories: ["Diabetes","HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },{
            name: "Moong Dal",
            categories: ["Diabetes","HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },{
            name: "Haldi Organic",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections","Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Wheatgrass Powder",
            categories: ["SkinIssues", "WellBeing", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Stevia Leaves",
            categories: ["Diabetes"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Neem Powder",
            categories: ["SkinIssues","Infections"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Dried Moringa Leaves",
            categories: ["SkinIssues", "WellBeing", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Dried Mushroom",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kalonji Oil",
            categories: ["WellBeing", "Arthritis", "Diabetes"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Coconut Oil",
            categories: ["SkinIssues", "WellBeing", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "ThyroidImbalance", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Dal Cheeni",
            categories: ["LiverSupport", "Arthritis", "Diabetes", "HighBP", "ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "PR Oil",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Vermicompost",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Lal Mirch Whole Organic",
            categories: ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Arthritis", "HighBP", "Infections","Cancer", "WeightLoss"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Green Tea",
            categories: ["WellBeing", "Diabetes",  "HighBP","Cancer", "WeightLoss"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Control & Cure",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Apple Cider Vinegar",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },

          {
            name: "Watermelon Seed",
            categories: ["SkinIssues","Arthritis","ThyroidImbalance","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Seeds",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "MINK Tea-20",
            categories: ["Infections"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Wheat Suji Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Maize Atta  Organic",
            categories: ["Digestion","ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kalonji Seeds",
            categories: ["WellBeing", "Diabetes","Arthritis"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Ragi (pearl millet) flour  Organic",
            categories: ["LiverSupport", "Arthritis", "HighBP","ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Maize Atta  Organic",
            categories: ["Digestion","ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Rice Poha Organic",
            categories: ["ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Arhar Dal Organic",
            categories: ["Diabetes","Arthritis", "HighBP"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Chana Whole Organic",
            categories: ["ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Chana Dal Organic",
            categories: ["ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kabuli Chana (chik pea 8-10 mm)Organic",
            categories: ["HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Cowpea Black Eye Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Masur Spit Washed  Organic",
            categories: ["Allergies","SkinIssues","Digestion","HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Cowpea Black Eye Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Moong Whole Organic",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Moong Split Washed Organic",
            categories: ["Arthritis","Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Rajma Chitra (kidney bean)  Organic",
            categories: ["Arthritis","Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Rajma Jammu Organic",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Rajma Red Organic",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Urad Split Washed Organic",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Urad Whole Organic",
            categories: ["SkinIssues","Diabetes","Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Peanut Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Chana Besan Organic",
            categories: ["ThyroidImbalance","Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Ajwain Organic",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Coriander Powder Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Peanut Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Coriander Whole Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Cumin Whole Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Fennel Organic",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Cumin Podwer Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Fenugreek  Organic",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Mustard Black Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Mustard Yellow Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Rai Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Red Chilli Powder Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Rock Salt ",
            categories: ["HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Gulkand",
            categories: ["SkinIssues"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Brown Sugar Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Mustard Oil Organic",
            categories: ["SkinIssues","HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Mustard Yellow Organic",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Coconut Oil Organic",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "Allergies", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Groundnut Oil Organic",
            categories: ["SkinIssues","Allergies", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Premium Cow Ghee Organic",
            categories: ["SkinIssues", "Digestion","Arthritis","ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Organic Soap GLYCERINE",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Sunflower Seed 100g",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections","KidneyIssue","ThyroidImbalance","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Flax Seeds 100g",
            categories: ["SkinIssues", "Digestion", "Arthritis", "Diabetes", "HighBP", "Infections","ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Pumpkin Seeds 100g",
            categories: [ "Digestion", "Arthritis", "Diabetes", "HighBP","ThyroidImbalance","Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Chia Seeds 100g",
            categories: ["Arthritis", "Diabetes", "HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Saplings",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Healthy Pulse Basket",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Microgreens",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Golden Nectar Basket",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Black Pepper",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Cardamom Organic",
            categories: ["Digestion","Infections"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Organic Vegetable",
            categories: [ "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "ThyroidImbalance", "Allergies", "Cancer","WeightLoss"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Neem Stix",
            categories: ["SkinIssues", "Digestion","WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Ash Gourd Juice",
            categories: ["SkinIssues", "Digestion","WellBeing","Diabetes","KidneyIssue","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Mushroom ",
            categories: ["Digestion","Allergies","Infections","Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Organic Soap GOAT MILK",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Spl Masala Gur",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Green Tea Stevia",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Flax Seed Oil",
            categories: ["SkinIssues","Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Allergies", "Cancer","WeightLoss"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Magnesium Oil ",
            categories: ["SkinIssues","Arthritis", "HighBP"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Incense Sticks",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Arjun Chhal(200g)",
            categories: ["HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Herbal Holi Colours-3",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Herbal Holi Colours-1",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kangni",
            categories: ["Digestion", "LiverSupport", "Arthritis", "Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kodra",
            categories: ["Digestion", "LiverSupport", "Arthritis", "Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Sesame (50g)",
            categories: ["SkinIssues","Arthritis"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Aloe Sanitizer",
            categories: ["SkinIssues"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "NEEM ALOE SANITIZER",
            categories: ["SkinIssues"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Organic Brown rice",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "CR Oil",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "MINK Spl. Masala",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Ashwagandha",
            categories: ["WellBeing","ThyroidImbalance"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Triphala Powder",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Dried Basil",
            categories: ["Digestion","Arthritis"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Figs (Anjeer)",
            categories: ["Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Brahmi Powder",
            categories: ["WellBeing","Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Shatavari",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Manjistha",
            categories: ["SkinIssues","Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "A2 Bilona Ghee 500ml",
            categories: ["SkinIssues","Digestion","Arthritis"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "GHAT Giloy Tonic",
            categories: ["WellBeing","Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Pure Cow Milk",
            categories: ["SkinIssues","Arthritis"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Fresh Giloy",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Org. Aata Matri",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Org. Aata Achari Mathi",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Swank/Barnyard Millet",
            categories: ["Digestion","LiverSupport","Arthritis","HighBP","ThroidImbalance","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kutki/Little Millet",
            categories: ["Digestion","LiverSupport","Arthritis","HighBP","ThroidImbalance","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Hari Kangni/Brown Top Millet",
            categories: ["Digestion","LiverSupport","Arthritis","HighBP","ThroidImbalance","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "White Quinoa",
            categories: ["Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Desi Khand",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Urad Split",
            categories: ["Digestion","Diabetes","HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Moong Split",
            categories: ["Digestion","Diabetes","HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Malka Masur Whole ",
            categories: ["Digestion","Diabetes","HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Red Chili Flakes",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Badi Elaichi",
            categories: ["Diabetes,HighBP"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Moth Beans",
            categories: ["Digestion","Diabetes","HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Bajra Flour",
            categories: ["Digestion","LiverSupport","Arthritis","Diabetes","HighBP","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Multigrain Dalia",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kasuri Methi",
            categories: ["Digestion","Diabetes","HighBP"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Moringa Leaf Powder",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies", "Cancer", "WeightLoss" ],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Shatavari Powder",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Amla Powder",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Mulethi Powder",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Harad Powder",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Dal Chini Whole",
            categories: ["Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "ThyroidImbalance", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Frozen Wheatgrass Cube",
            categories: ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies", "Cancer", "WeightLoss"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Ashwagandha Tonic Mix",
            categories: ["WellBeing","ThyroidImbalance","WeightLoss"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Aloe Vera Juice",
            categories: ["SkinIssues", "WellBeing", "Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Fresh Aloevera Leaf",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Super Healthy Laddu",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "MINK Makhanas (Fox nuts)",
            categories: ["Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "ThyroidImbalance", "Allergies","WeightLoss"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Elaichi Powder",
            categories: ["Digestion", "LiverSupport", "HighBP", "Infections"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Arjun Chhal Powder",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Al Habibi Dates",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Alsi Pinni",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Besan Laddu",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Organic Lemon Pickle",
            categories: ["Digestion","Infection"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Mango Pickle",
            categories: ["Digestion","Infection"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Amla Pickle",
            categories: ["Digestion","Infection"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Tulsi Ark",
            categories: ["SkinIssues", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Panchgavya Ghrit",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Rose Tulsi Tea",
            categories: ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Diabetes", "Infections", "Allergies", "Cancer"  ],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Lemongrass Tea",
            categories: ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Diabetes","Arthritis", "HighBP", "Infections", "Allergies", "Cancer" ],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Organiko Soaps",
            categories: ["SkinIssues", "WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kinnow Marmalade",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Cinnamon Vegan Cookies",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Rajgira Coconut Gluten Free Cookies",
            categories: ["WellBeing","Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Ginger Lemon Vegan Cookies",
            categories: ["WellBeing","Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Coco Choco Cookies",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Choco Oats Cookies",
            categories: ["WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Pineapple Green",
            categories: ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Diabetes","Arthritis", "HighBP", "Infections", "Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Lemony Wheatgrass",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Aloevera Shot",
            categories: ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Diabetes","Arthritis", "HighBP", "Infections","KidneyIssue", "Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Tangy Vera",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Aloevera Punch",
            categories: ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Diabetes","Arthritis", "HighBP", "Infections","KidneyIssue","ThyroidImbalance", "Allergies","WeightLoss"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Alonade",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Tea 20 Ready",
            categories: ["LiverSupport","Infections"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Tea 20 Honey",
            categories: ["LiverSupport","Infections"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "SpL Green Tea Ready",
            categories: ["Digestion", "LiverSupport", "Diabetes", "HighBP", "Infections"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Virgin Hot Toddy",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Turmeric Shot",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Diabetes","Arthritis", "HighBP", "Infections","ThyroidImbalance", "Cancer","WeightLoss"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Cow Dung Ash",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kodra Aata",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kangni Aata",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Hari Kangni Aata",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kutki Aata",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Swank Aata",
            categories: ["Digestion","Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Enriched Cocopeat",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Black Pepper Powder",
            categories: ["Digestion,LiverSupport,Infections"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "N 95 5 Ply MASK",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Basil Seeds",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Diabetes", "HighBP", "Infections"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Tawa",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "WaterCooler S",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "WaterCooler M",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "WaterCooler L",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Jug",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Dahi Handi S",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Dahi Handi M",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Dahi Handi L",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Terracotta Bottle Painted",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kulhad L",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Spl Dahi Handi",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kunda Handi S",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kunda Handi M",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Kunda Handi L",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "KULHAD",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "AMBALI SET",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "WHEATGRASS OIL",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "GROW BAG S",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "GROW BAG M",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "GROW BAG L",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "COCONUT WATER",
            categories: ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "NEEM TULSI GOATMILK SOAP",
            categories: ["SkinIssues", "WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "NEEM TULSI GLYCERINE SOAP",
            categories: ["SkinIssues", "WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Apple Cider Vinegar with Mother Culture",
            categories: ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies", "Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Lauki Oregano Juice",
            categories: ["SkinIssues", "WellBeing", "Arthritis", "Diabetes", "HighBP"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Gond Katira",
            categories: ["Digestion","SkinIssues"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Neem Oil",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Coconut Milk",
            categories: ["SkinIssues", "Digestion", "Arthritis", "Diabetes", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Dinner Set 6 pc",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Amla Candy Sweet/Spicy",
            categories: ["WellBeing","Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Bael Candy",
            categories: ["WellBeing","Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Garlic Pickle",
            categories: ["HighBP"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Turmeric Pickle",
            categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies", "Cancer","WeightLoss"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Lotus Stem Pickle",
            categories: ["SkinIssues", "Digestion", "Arthritis", "Diabetes", "HighBP"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Sona Moti Wheat Aata",
            categories: ["Digestion", "Diabetes"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Sona Moti Wheat Dalia",
            categories: ["Digestion", "Diabetes"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Organic Sundd Powder",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Org Aata Muffin ",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Org Aata Cake",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Bajra Whole",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Designer Soap",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Gokhru Powder",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
        {
          name: "Natural Hair Colour",
          categories: [""],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Coconut Milk",
          categories: [""],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Lemon Grass Oil",
          categories: ["SkinIssues","WellBeing"],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Organiko Soap New",
          categories: ["SkinIssues"],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Ragi Whole",
          categories: [""],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Clove Oil",
          categories: ["SkinIssues","WellBeing"],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Euclyptus Oil",
          categories: ["SkinIssues","WellBeing"],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Lavender Oil",
          categories: ["SkinIssues","WellBeing"],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Rosemary Oil",
          categories: ["SkinIssues","WellBeing"],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Tea Tree Oil",
          categories: ["SkinIssues","WellBeing"],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Sesame Oil",
          categories: ["SkinIssues","Arthritis"],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "Almond Oil",
          categories: ["SkinIssues","Arthritis"],
          image: "",
          price: "",
          details: ""
        },
        {
          name: "MINK Kitchen",
          categories: [""],
          image: "",
          price: "",
          details: ""
        },
        {
            name: "Amaranth",
            categories: ["Digestion","Diabetes","HighBP","Allergies","Cancer"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "MINK Millet Biscuits",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Gur Wali Chai",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Terracotta Cooker",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Amla Candy Sweet/Spicy",
            categories: [""],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Rose Oil",
            categories: ["SkinIssues","WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Castor Oil",
            categories: ["SkinIssues","Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Olive Oil",
            categories: ["SkinIssues","Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Flaxseed Oil",
            categories: ["SkinIssues","Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Amla Oil",
            categories: ["SkinIssues","Digestion"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Shikhakai Oil",
            categories: ["SkinIssues","WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Neem Oil",
            categories: ["SkinIssues","WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Jasmine Oil",
            categories: ["SkinIssues","WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Lemon Oil",
            categories: ["SkinIssues","WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Peppermint Oil",
            categories: ["SkinIssues","WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Jojoba Oil",
            categories: ["SkinIssues","WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Argan Oil",
            categories: ["SkinIssues","WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
            name: "Sampoorna Hair Oil",
            categories: ["SkinIssues","WellBeing"],
            image: "",
            price: "",
            details: ""
          },   {
            name: "Spa Oil - Cellulite Loss",
            categories: ["SkinIssues","WellBeing"],
            image: "",
            price: "",
            details: ""
          },
          {
              name: "Spa Oil - Jasmine Sesame",
              categories: ["SkinIssues","WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Spa Oil - Jojoba Sweet Almond ",
              categories: ["SkinIssues","WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Spa Oil - Lavender Olive",
              categories: ["SkinIssues","WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Spa Oil - Rose & Castor",
              categories: ["SkinIssues","WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Beard Oil",
              categories: ["SkinIssues","WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "24 K Anti Aging Serum",
              categories: ["SkinIssues","WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "24 K Acne Face Serum",
              categories: ["SkinIssues","WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "24 K Oily Skin Face Serum",
              categories:["SkinIssues","WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "24 K Dry Skin Face Serum",
              categories: ["SkinIssues","WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Baby Oil - Mineral Free",
              categories: ["SkinIssues","WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Jasmine WS - Diffuser Fragrance",
              categories: ["WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Lavender WS - Diffuser Fragrance ",
              categories: ["WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Mandarin WS - Diffuser Fragrance ",
              categories: ["WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Denim WS - Diffuser Fragrance",
              categories: ["WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Oudhblend WS - Diffuser Fragrance",
              categories: ["WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "English WS - Diffuser Fragrance",
              categories: ["WellBeing"],
              image: "",
              price: "",
              details: ""
            },
            {
              name: "Hazma é Ajwain",
              categories: [""],
              image: "",
              price: "",
              details: ""
            },
            {
                name: "Neem Comb",
                categories: [""],
                image: "",
                price: "",
                details: ""
              },
              {
                name: "Bamboo Toothbrush",
                categories: [""],
                image: "",
                price: "",
                details: ""
              },
              {
                name: "Forever Young",
                categories:  ["SkinIssues", "WellBeing", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "ThyroidImbalance"],
                image: "",
                price: "",
                details: ""
              },
              {
                name: "Organic Bamboo Tooth Brush - Kids",
                categories: [""],
                image: "",
                price: "",
                details: ""
              },
              {
                name: "Neem Beard Comb",
                categories: [""],
                image: "",
                price: "",
                details: ""
              },
              {
                name: "Shampoo Comb",
                categories: [""],
                image: "",
                price: "",
                details: ""
              },
              {
                name: "Amla Juice Organic",
                categories: [""],
                image: "",
                price: "",
                details: ""
              },
              {
                name: "Aam Panna Organic",
                categories: [""],
                image: "",
                price: "",
                details: ""
              },
              {
                name: "Almond Milk",
                categories: ["Allergies"],
                image: "",
                price: "",
                details: ""
              },
              {
                name: "Soy Milk",
                categories: ["Allergies"],
                image: "",
                price: "",
                details: ""
              },
              {
                name: "Tatsy Chocolate",
                categories: ["WellBeing"],
                image: "",
                price: "",
                details: ""
              },
              {
                  name: "Nutty Caramel",
                  categories: ["WellBeing"],
                  image: "",
                  price: "",
                  details: ""
                },
                {
                  name: "Rose Petal",
                  categories: ["SkinIssues"],
                  image: "",
                  price: "",
                  details: ""
                },
                {
                  name: "Choco Nutella",
                  categories: ["WellBeing"],
                  image: "",
                  price: "",
                  details: ""
                },
                {
                  name: "Very Strawberry",
                  categories: ["SkinIssues","Digestion"],
                  image: "",
                  price: "",
                  details: ""
                },
                {
                  name: "Amazing Hot Coffee with Date Palm Jaggery",
                  categories: ["WellBeing"],
                  image: "",
                  price: "",
                  details: ""
                },
                {
                  name: "Cold Coffee with Date Palm Jaggery",
                  categories: ["WellBeing"],
                  image: "",
                  price: "",
                  details: ""
                },
                {
                  name: "Decoction (Peepal, Guava, Harshingar, Insulin)",
                  categories: ["Diabetes","HighBP"],
                  image: "",
                  price: "",
                  details: ""
                },
                {
                  name: "Soup",
                  categories: [""],
                  image: "",
                  price: "",
                  details: ""
                },
                {
                  name: "Chana Sattu",
                  categories: [""],
                  image: "",
                  price: "",
                  details: ""
                },
                {
                    name: "Jau Sattu",
                    categories: [""],
                    image: "",
                    price: "",
                    details: ""
                  },
                  {
                      name: "Sunflower Oil",
                      categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "KidneyIssue", "ThyroidImbalance", "Allergies"],
                      image: "",
                      price: "",
                      details: ""
                    },
                    {
                      name: "Bamboo Water Bottle",
                      categories: [""],
                      image: "",
                      price: "",
                      details: ""
                    },
                    {
                      name: "Jau Dalia",
                      categories: [""],
                      image: "",
                      price: "",
                      details: ""
                    },
                    {
                      name: "Bael Candy 350G",
                      categories: [""],
                      image: "",
                      price: "",
                      details: ""
                    },
                    {
                      name: "Roasted Chana",
                      categories: [""],
                      image: "",
                      price: "",
                      details: ""
                    },
                    {
                      name: "Moringa Noodles",
                      categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "KidneyIssue", "ThyroidImbalance", "Allergies"],
                      image: "",
                      price: "",
                      details: ""
                    },
                    {
                      name: "Foxtail Millet Noodles",
                      categories: ["Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Allergies"],
                      image: "",
                      price: "",
                      details: ""
                    },
                    {
                      name: "Finger Millet Noodles",
                      categories: ["Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Allergies"],
                      image: "",
                      price: "",
                      details: ""
                    },
                    {
                      name: "Jau Aata",
                      categories: ["Digestion","Allergies"],
                      image: "",
                      price: "",
                      details: ""
                    },
                    {
                      name: "Jowar Aata",
                      categories: ["Digestion","Allergies"],
                      image: "",
                      price: "",
                      details: ""
                    },
                    {
                        name: "Mustard Yellow Organic",
                        categories: [""],
                        image: "",
                        price: "",
                        details: ""
                      },
                      {
                          name: "A2 Milk ",
                          categories: ["Digestion","SkinIssues","Arthritis","Allergies"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Rolled Oats",
                          categories: [""],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Forest Wild Honey",
                          categories: ["SkinIssues", "Digestion", "LiverSupport", "Arthritis", "Diabetes", "HighBP", "Infections", "ThyroidImbalance", "Allergies","Cancer","WeightLoss"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Cast Iron Appa Chatti",
                          categories: [""],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Cast Iron Shallow Fry Pan",
                          categories: [""],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Cast Iron Kadai",
                          categories: [""],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Cast Iron Dosa Tawa",
                          categories: [""],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Cast Iron Roti Tawa with Grip",
                          categories: [""],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Cast Iron Paddu Maker 7 Cavity",
                          categories: [""],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Cast Iron Fry pan",
                          categories: [""],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Cast Iron Shallow Grill pan",
                          categories: [""],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Silicon Grip",
                          categories: [""],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Multi Millet Pasta",
                          categories: ["Digestion","LiverSupport","Arthritis"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Kodo Millet Pasta",
                          categories: ["Digestion","LiverSupport","Arthritis"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Little Millet Pasta",
                          categories: ["Digestion","LiverSupport","Arthritis"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Pearl Millet Pasta",
                          categories: ["Digestion","LiverSupport","Arthritis"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Barnyard Millet Pasta",
                          categories: ["Digestion","LiverSupport","Arthritis"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Ragi Millet Pasta",
                          categories: ["Digestion","LiverSupport","Arthritis"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Foxtail Millet Pasta",
                          categories: ["Digestion","LiverSupport","Arthritis"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Moringa Millet Pasta",
                          categories: ["Digestion","LiverSupport","Arthritis","Diabetes","HighBP"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Organic Peanut Chikki",
                          categories: ["WellBeing"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Organic Gur Reori",
                          categories: ["WellBeing"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Organic Til Barfi",
                          categories: ["WellBeing"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Organic Amaranth Chikki",
                          categories: ["WellBeing"],
                          image: "",
                          price: "",
                          details: ""
                        },
                        {
                          name: "Chawyanparash",
                          categories: ["WellBeing","Digestion"],
                          image: "",
                          price: "",
                          details: ""
                        },
        
    ];

    let currentCategory = ''; // No default category filter

    function renderProducts(filteredProducts) {
        const foodMenuList = document.querySelector(".food-menu-list");
        foodMenuList.innerHTML = ""; // Clear the list

        filteredProducts.forEach((product, i) => {
            const productItem = document.createElement("li");
            productItem.classList.add("product-item");
            productItem.setAttribute("data-category", product.categories.join(', ')); // Use the actual categories

            const card = `
                <div class="food-menu-card">
                    <div class="card-banner">
                        <img src="${product.image || 'https://example.com/images/default.jpg'}" loading="lazy" alt="${product.name}" class="w-100">
                    </div>
                    <div class="wrapper">
                        <div class="rating-wrapper">
                            ${'<ion-icon name="star"></ion-icon>'.repeat(product.rating || 0)}
                            ${'<ion-icon name="star-outline"></ion-icon>'.repeat(5 - (product.rating || 0))}
                        </div>
                    </div>
                    <h3 class="h3 card-title">${product.name}</h3>
                    <div class="price-wrapper">
                        <p class="price-text">Price:</p>
                        <data class="price">₹${product.price}</data>
                    </div>
                </div>
                <div id="productModal-${i}" class="modal">
                    <div class="modal-content">
                        <span class="close" data-index="${i}">&times;</span>
                        <div class="modal-body">
                            <div class="modal-img">
                                <img src="${product.image || 'https://example.com/images/default.jpg'}" alt="${product.name}" width="300px">
                            </div>
                            <div class="modal-description">
                                <h3>${product.name}</h3>
                                <p>${product.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            productItem.innerHTML = card;
            foodMenuList.appendChild(productItem);

            // Add event listener to open modal
            productItem.querySelector('.food-menu-card').addEventListener('click', () => {
                document.getElementById(`productModal-${i}`).style.display = "block";
            });

            // Add event listener to close modal
            productItem.querySelector('.close').addEventListener('click', (e) => {
                document.getElementById(`productModal-${e.target.dataset.index}`).style.display = "none";
            });
        });
    }

    function displayProducts() {
        const filteredProducts = products.filter(product => 
            currentCategory === '' || product.categories.map(c => c.toLowerCase()).includes(currentCategory.toLowerCase())
        );

        renderProducts(filteredProducts);
    }

    // Initial render with all products
    displayProducts();

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            currentCategory = event.target.getAttribute('data-category') || '';
            displayProducts();
        });
    });

    // Close modal if clicked outside of content
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    });
});
