const cardHandler = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/ai/tools`
  );
  const data = await response.json();
  const aiNewsArray = data.data.tools;
  aiNewsArray.forEach((element) => {
    const cardContainer = document.getElementById("card-container");
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card w-96 bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                <img src="${
                  element?.image ? element.image : "NO Image Found"
                }" class="rounded-xl" />
              </figure>
              <div class="card-body items-center ">
                <h2 class="card-title text-center">${element.name}</h2>
                <div class="text-left">
                <h2 class="font-bold text-xl">Features:</h2>
                <ol id="main-features">${element.features}</ol>
                </div>
                <div class="card-actions">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
      `;
      cardContainer.appendChild(div);
      });

};



cardHandler();
