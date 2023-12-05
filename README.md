# Double A
## A responsive tool for locating breakpoints in a stylesheet
### by Annette Arabasz ([arabasz.com](http://arabasz.com)), Nick Snyder ([fasterhorses.co](http://fasterhorses.co)) and Aaron Boudreau. ([madpow.com/aaron-boudreau](http://www.madpow.com/team/aaron-boudreau))


## Summary & Example
Double A is a Javascript-based responsive tool for locating named breakpoints in a stylesheet. It is helpful for locating the area of your CSS issue without having to open the web inspector. 

Double A works by appending a fixed tab to the bottom of your webpage that shows both the current pixel width of the viewport and a color. The color of the tab is representative of the area where the CSS error will happen. While you can assign your own colors, we suggesting sticking with the ROYGBIV mnemonic, as it is easy to remember.

![image](https://github.com/annetters/Double-A/assets/751308/902cfb5e-b72f-4dbe-929d-769fdf206108)

![image](https://github.com/annetters/Double-A/assets/751308/e6dd21e8-7134-4dec-9153-9e9232b9ceb7)

~~Excited? Sick of reading? Here's an [example of Double A in-action](http://fstrhrs.com/assets/double-a/index.html)!~~

## Naming and Locating Breakpoints
To properly reap all the benefits from Double A, be sure to place comment flags in your CSS file noting each of the sections. Using the default values Double A provides, our stylesheet would look like:

    /*
    ==================================================
        Red: No Breakpoints
    ==================================================
    */
    
    
    /*
    ==================================================
        Orange: 30em
    ==================================================
    */
    
    @media screen and (min-width: 30em) {
    
    }
    
    /*
    ==================================================
        Yellow: 40em
    ==================================================
    */
    
    @media screen and (min-width: 40em) {
    
    }
    
    /*
    ==================================================
        Green: 50em
    ==================================================
    */
    
    @media screen and (min-width: 50em) {
    
    }
    
    /*
    ==================================================
        Blue: 60em
    ==================================================
    */
    
    @media screen and (min-width: 60em) {
    
    }
    
    
    /*
    ==================================================
        Purple: 75em
    ==================================================
    */
    
    @media screen and (min-width: 75em) {
    
    }

## Technical Documentation
You can easily adjust the breakpoints and the colors by passing in different parameters. Please refer to the sample code below:

    $(document).ready(function() {
        $(this).doublea({
            format: 'em',
            breakpoints: [30, 40, 50, 60, 75],
            colors: ['#ffb346', '#dfdd4a', '#44ce19', '#7bb8f7', '#c17bf7']
        });
    });

*format: 'em'* - Allows you to choose whether your breakpoints will be EM or pixel-based. 

*breakpoints: []* - The breakpoints you'd like to test against. If in the previous parameter you chose 'em', be sure to use 30 rather than 480, for example.

*colors: []* - The colors for each of the corresponding breakpoints in the previous parameter. **The number of items in both breakpoints[] and colors[] should match**.

