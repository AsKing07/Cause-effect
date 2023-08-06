const people = document.querySelectorAll("li")

const details = data;

const detailSection = document.getElementById("person-details");

people.forEach((person) => 
{
    
    person.addEventListener("click",() =>
    {
        

        people.forEach((person) =>
        {
            person.classList.remove("clicked");
        });


        const nom = person.textContent;
        person.classList.add("clicked");
       

        data.forEach((detail) =>
        {
            if(detail.name === nom)
            {
                detailSection.innerHTML = "<span class='innerDetails'>Nom: </span> " + detail.name + 
                                          "<br><span class='innerDetails'>Street: </span> " + detail.street + 
                                          "<br><span class='innerDetails'>City: </span> " + detail.city + 
                                          "<br><span class='innerDetails'>State: </span> " + detail.state + 
                                          "<br><span class='innerDetails'>Country: </span> " + detail.country + 
                                          "<br><span class='innerDetails'>Téléphone: </span>" + detail.telephone + 
                                          "<br><span class='innerDetails'>Birthday: </span> " + detail.birthday;        
            }
        });

    });

    
});