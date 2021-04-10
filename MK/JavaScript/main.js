window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Task 0
    function Hero (heroName, health) {
        this.name = heroName.toUpperCase();
        this.hp = health;
        this.img = `http://reactmarathon-api.herokuapp.com/assets/${this.name.toLowerCase()}.gif`;
        this.weapon = ['топор', 'sword'];
        this.attack = function () {
            console.log(this.name + ' Fight...');
        };
    }

    // Task 1
    function createPlayer(player, selectedHero) {
        let $player = document.createElement('div'),
            $progressbar = document.createElement('div'),
            $life = document.createElement('div'),
            $name = document.createElement('div'),
            $character = document.createElement('div'),
            $heroImg = document.createElement('img'),
            $arenas = document.querySelector('.arenas'),
            heroName = selectedHero.name,
            health = selectedHero.hp;
        
        $player.classList.add(player);
        $progressbar.classList.add('progressbar');
        $life.classList.add('life');
        $name.classList.add('name');
        $character.classList.add('character');
        
        $life.style.width = health + '%';
        $name.innerText = heroName;
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);
        
        $heroImg.src = selectedHero.img;
        $character.appendChild($heroImg);

        $player.appendChild($progressbar);
        $player.appendChild($character);

        $arenas.appendChild($player);
    }

    // Task 3
    let heroes = ['scorpion', 'kitana', 'liukang', 'sonya', 'subzero'],
        hero1 = new Hero('scorpion', 55),
        hero2 = new Hero('liukang', 90);

    createPlayer('player1', hero1);
    createPlayer('player2', hero2);
});