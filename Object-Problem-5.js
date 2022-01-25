const titleArray =  [ 

    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
 
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
 
    ];

    function arraySorted(a, b) {

        if(a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
        }

        if(a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
        }

        return 0;
    }

    console.log(titleArray.sort(arraySorted))

    // I started by creating the function that supposed to go into the sort method parameter abd called it "arraySorted". I then start my comparisons using if statements. 
    // I researched online how to compare each element. The sort method is a loop method for arrays. So "a" and "b", in this case, represent the two properties being compared to one another.
    // I then also added toUpperCase to make sure that capitilization did not play a factor in the comparisons. The "return -1" represents if titleA is alphabetically 
    // after titleB, to make sure to list it after titleB to make sure its in alphabetical order. The "return 1" represents vice versa. The "return 0" just says if they equal
    // one another to keep them where they are at. I then printed the array that I declared above and used the sort method and inserted the "arraySorted" function and got the 
    // correct result.