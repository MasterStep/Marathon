'use strict';
window.addEventListener('DOMContentLoaded', () => {
    let $arenas = document.querySelector('.arenas'),
        $randomButton = document.querySelector('.button');

    // Task 0
    function Hero (heroName, health, numberPlayer) {
        this.numberPlayer = numberPlayer;
        this.name = heroName.toUpperCase();
        this.hp = health;
        this.img = `http://reactmarathon-api.herokuapp.com/assets/${this.name.toLowerCase()}.gif`;
        this.weapon = ['топор', 'sword'];
        this.attack = function () {
            console.log(this.name + ' Fight...');
        };
    }

    function createElement(tagName, className) {
        let $element = document.createElement(tagName);
        if (className){
            $element.classList.add(className);
        }
        return $element;
    }

    // Task 1
    function createPlayer(selectedHero) {
        let $player = createElement('div', 'player' + selectedHero.numberPlayer),
            $progressbar = createElement('div', 'progressbar'),
            $life = createElement('div', 'life'),
            $name = createElement('div', 'name'),
            $character = createElement('div', 'character'),
            $heroImg = createElement('img'),
            heroName = selectedHero.name,
            health = selectedHero.hp;
                
        $life.style.width = health + '%';
        $name.innerText = heroName;
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);
        
        $heroImg.src = selectedHero.img;
        $character.appendChild($heroImg);

        $player.appendChild($progressbar);
        $player.appendChild($character);

        return $player;
    }

    function generatePowerAttack(){
        return Math.floor(Math.random() * 20) + 1;
    }

    function playerwin(numberHero) {
        let name;
        if (numberHero === 1){
            name = hero2.name;
        } else {
            name = hero1.name;
        }
        const $loseTitle = createElement('div', 'winTitle');
        $loseTitle.innerText = name + ' win';

        $randomButton.disabled = true;
        return $loseTitle;
    }

    function changeHp(player){
        const $playerLife = document.querySelector(`.player${player.numberPlayer} .life`);
        
        player.hp -= generatePowerAttack();
        
        if (player.hp <= 0) {
            player.hp = 0;
        }

        console.log(player.hp);
        $playerLife.style.width = player.hp + '%';

        if (player.hp <= 0) {
            $arenas.appendChild(playerwin(player.numberPlayer));
        }
    }

    // Task 3
    let heroes = ['scorpion', 'kitana', 'liukang', 'sonya', 'subzero'],
        hero1 = new Hero('scorpion', 100, 1),
        hero2 = new Hero('liukang', 100, 2);

    
    $randomButton.addEventListener('click', () => {
        changeHp(hero1);
        changeHp(hero2);
    });
    $arenas.appendChild(createPlayer(hero1));
    $arenas.appendChild(createPlayer(hero2));
});