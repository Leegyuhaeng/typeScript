let color: `#${string}`;

function getColor(color: `#${string}`):`#${string}` | undefined {
    if(color.length === 7) {
        return color;
    }
}

color = "red";
color = "#ffffff";
color = "rgba(0,0,0,0.5)";

color = getColor("#ffffff")
console.log(color);