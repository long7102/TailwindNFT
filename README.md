Open Terminal in project
npm init -y 
npm install -g
npm install
vào package.json, đổi từ test thành dev, phần ở trong ngoặc kép đổi thành vite
//setup tailwind css
npx tailwindcss-cli build css/tailwind.css -o build/tailwind.css

//build lại sau khi custom 
npx tailwindcss -i css/tailwind.css -o build/tailwind.css --watch
npm run dev