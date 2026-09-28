import greens from "./assets/greens.jpg";
import honey from "./assets/honey.jpg";
import jaggery from "./assets/jaggery.jpg";
import millets from "./assets/millets.jpg";
import rice from "./assets/rice.jpg";
import turmeric from "./assets/turmeric.jpg";

const products = [
	{
		_id: "local-greens",
		name: "Fresh Greens Bundle",
		price: 60,
		image: greens,
		description: "Organic green leafy vegetables.",
	},
	{
		_id: "local-honey",
		name: "Pure Honey",
		price: 150,
		image: honey,
		description: "Raw, natural sweet honey.",
	},
	{
		_id: "local-jaggery",
		name: "Organic Jaggery",
		price: 90,
		image: jaggery,
		description: "Healthy jaggery made traditionally.",
	},
	{
		_id: "local-millets",
		name: "Multi Millet Pack",
		price: 120,
		image: millets,
		description: "Mixed millets for health.",
	},
	{
		_id: "local-rice",
		name: "Premium Rice",
		price: 70,
		image: rice,
		description: "Freshly harvested rice.",
	},
	{
		_id: "local-turmeric",
		name: "Turmeric Powder",
		price: 95,
		image: turmeric,
		description: "Pure organic turmeric powder.",
	},
];

export default products;

/* const products = [
//   {
//     _id: "1",
//     name: "Organic Turmeric Powder",
//     price: 180,
//     image: "turmeric.jpg",
//     description: "Pure home-made turmeric powder directly from farms."
//   },
//   {
//     _id: "2",
//     name: "Natural Honey",
//     price: 250,
//     image: "honey.jpg",
//     description: "Unprocessed natural honey collected from forest bees."
//   },
//   {
//     _id: "3",
//     name: "Cold-Pressed Coconut Oil",
//     price: 350,
//     image: "coconut-oil.jpg",
//     description: "Healthy cold-pressed coconut oil extracted traditionally."
//   },
//    {
//     _id: "4",
//     name: "Full Fresh Greens",
//     price: 350,
//     image: "greens.jpg",
//     description: "Healthy Greens which grown naturally."
//   },
//    {
//     _id: "5",
//     name: "Types of Indian Rice",
//     price: 350,
//     image: "typesofrice.jpg",
//     description: "Healthy Types of Indian Rice grown traditionally."
//   },
//    {
//     _id: "6",
//     name: "Full Fresh Fruits and Vegetables",
//     price: 350,
//     image: "fruits-vegetables.jpg",
//     description: "Healthy Fruits and Vegetables grown without chemical fertilizers."
//   }
// ];

// export { products };
// import greens from "./assets/greens.jpg";
// import honey from "./assets/honey.jpg";
// import jaggery from "./assets/jaggery.jpg";
// import millets from "./assets/millets.jpg";
// import rice from "./assets/rice.jpg";
// import turmeric from "./assets/turmeric.jpg";
// import typesofrice from "./assets/typesofrice.jpg";

// const products = [
//   { id: 1, name: "Fresh Greens Bundle",
//      price: 60,
//     image: greens, 
//     description: "Organic green leaves pack." 
//   },

//   { id: 2, 
//     name: "Pure Honey", 
//     price: 150, 
//     image: honey, 
//     description: "Natural unprocessed honey." 
//   },
//   { id: 3, 
//     name: "Organic Jaggery", 
//     price: 90, 
//     image: jaggery, 
//     description: "Chemical-free jaggery cube pack." 
//   },
//   { id: 4, 
//     name: "Multi Millet Pack", 
//     price: 120, 
//     image: millets, 
//     description: "Healthy millet mix." 
//   },
//   { id: 5, name: "Premium Rice", price: 70, image: rice, description: "Freshly harvested rice." },
//   { id: 6, name: "Turmeric Powder", price: 95, image: turmeric, description: "Pure organic turmeric." },
//   { id: 7, name: "Idly Rice", price: 80, image: typesofrice, description: "Soft idly rice." },
//   { id: 8, name: "Black Rice", price: 160, image: typesofrice, description: "Rich antioxidant rice." },
//   { id: 9, name: "Brown Rice", price: 130, image: typesofrice, description: "Healthy brown rice." },
//   { id: 10, name: "Kodo Millet", price: 110, image: millets, description: "Iron rich millet." },
//   { id: 11, name: "Foxtail Millet", price: 125, image: millets, description: "Fiber-rich millet." },
//   { id: 12, name: "Little Millet", price: 135, image: millets, description: "Perfect for diet food." },
//   { id: 13, name: "Palm Jaggery", price: 110, image: jaggery, description: "Healthy Palm Jaggery." },
//   { id: 14, name: "Forest Honey", price: 180, image: honey, description: "Premium forest-harvest honey." },
//   { id: 15, name: "Raw Turmeric", price: 75, image: turmeric, description: "Fresh turmeric pieces." },
//   { id: 16, name: "Broken Rice", price: 65, image: rice, description: "Perfect for porridge." },
//   { id: 17, name: "Herbal Greens Pack", price: 55, image: greens, description: "3 Healthy herbal greens." },
//   { id: 18, name: "Sprouted Millet Mix", price: 145, image: millets, description: "Sprouted & dried millets." },
//   { id: 19, name: "Ayurvedic Rice Mix", price: 160, image: typesofrice, description: "Good for health." },
//   { id: 20, name: "Village Honey", price: 140, image: honey, description: "Pure village-side honey." }
// ];

// export default products;

// import greens from "./assets/greens.jpg";
// import honey from "./assets/honey.jpg";
// import jaggery from "./assets/jaggery.jpg";
// import millets from "./assets/millets.jpg";
// import rice from "./assets/rice.jpg";
// import turmeric from "./assets/turmeric.jpg";
// import kodo from "./assets/kodo.jpg";
// import foxtail from "./assets/foxtail.jpg";
// import panchakavya from "./assets/panchakavya.jpg";
// import soap from "./assets/soap.jpg";
// import custard from "./assets/custard.jpg";
// import tuber from "./assets/tuber.jpg";
// import lipbalm from "./assets/lipbalm.jpg";
// import facepack from "./assets/facepack.jpg";
// import neem from "./assets/neem.jpg";
// import masala from "./assets/masala.jpg";
// import fertilizer from "./assets/fertilizer.jpg";
// import dosamix from "./assets/dosamix.jpg";
// import peanutjam from "./assets/peanutjam.jpg";

// const products = [
//   { id: 1, name: "Fresh Greens Bundle", price: 60, image: greens, description: "Organic green leafy vegetables." },

//   { id: 2, name: "Pure Honey", price: 150, image: honey, description: "Raw, natural sweet honey." },

//   { id: 3, name: "Organic Jaggery", price: 90, image: jaggery, description: "Healthy jaggery made traditionally." },

//   { id: 4, name: "Multi Millet Pack", price: 120, image: millets, description: "Mixed millets for health." },

//   { id: 5, name: "Rice", price: 70, image: rice, description: "Harvest fresh natural rice." },

//   { id: 6, name: "Turmeric Powder", price: 95, image: turmeric, description: "Pure organic turmeric powder." },

//   { id: 7, name: "Kodo Millet", price: 110, image: kodo, description: "Iron-rich traditional kodo millet." },

//   { id: 8, name: "Foxtail Millet", price: 125, image: foxtail, description: "Nutrient-rich foxtail millet." },

//   { id: 9, name: "Panchakavya", price: 160, image: panchakavya, description: "Natural plant growth booster." },

//   { id: 10, name: "Natural Handmade Soap", price: 65, image: soap, description: "Chemical-free herbal soaps." },

//   { id: 11, name: "Custard Apple Fruits", price: 140, image: custard, description: "Fresh sweet custard apples." },

//   { id: 12, name: "Tuber Vegetables", price: 85, image: tuber, description: "Fresh traditional tuber veggies." },

//   { id: 13, name: "Natural Lip Balm", price: 55, image: lipbalm, description: "Vegetable-based natural lip balm." },

//   { id: 14, name: "Organic Face Pack", price: 90, image: facepack, description: "Skin-friendly herbal face pack." },

//   { id: 15, name: "Neem Oil for Plants", price: 130, image: neem, description: "Natural neem solution for pests." },

//   { id: 16, name: "Masala Items", price: 150, image: masala, description: "Traditional home-style masalas." },

//   { id: 17, name: "Organic Fertilizers (Harsh's Products)", price: 180, image: fertilizer, description: "Pure organic fertilizers." },

//   { id: 18, name: "Instant Dosa Mix (All Millets)", price: 120, image: dosamix, description: "Healthy instant dosa mix." },

//   { id: 19, name: "Fresh Peanut Jam", price: 160, image: peanutjam, description: "Natural homemade peanut jam." },
// ];

// export default products;





// name: Frontend CI/CD - S3

// on:
//   push:
//     branches:
//       - main
//     paths:
//       - "my-app/**"

// jobs:
//   deploy:
//     runs-on: ubuntu-latest

//     steps:
//       - name: Checkout code
//         uses: actions/checkout@v4

//       - name: Setup Node.js
//         uses: actions/setup-node@v4
//         with:
//           node-version: 18

//       - name: Install dependencies
//         run: |
//           cd my-app
//           npm install

//       - name: Build frontend
//         run: |
//           cd my-app
//           npm run build

//       - name: Configure AWS credentials
//         uses: aws-actions/configure-aws-credentials@v2
//         with:
//           aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
//           aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
//           aws-region: ${{ secrets.AWS_REGION }}

//       - name: Sync frontend to S3
//         run: |
//           aws s3 sync my-app/dist s3://${{ secrets.AWS_S3_BUCKET }} --delete this fot running our project with aws console
*/