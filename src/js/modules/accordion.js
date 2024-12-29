const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
          wrap = document.querySelector('.accordion');
        //   blocks = document.querySelectorAll(itemsSelector);
        // console.log(wrap);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            // document.querySelector('.active-style').classList.remove('active-style')
            // document.querySelector('.active-content').classList.remove('active-content')
            // if (document.querySelector('.active-content') && document.querySelector('.active-style')) {
            //     document.querySelector('.active-style').classList.remove('active-style')
            //     document.querySelector('.active-content').classList.remove('active-content')
            //     this.classList.toggle('active-style')
            //     this.nextElementSibling.classList.toggle('active-content')
            //     if (this.classList.contains('active-style')) {
            //         this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'
            //     } else {
            //         this.nextElementSibling.style.maxHeight = '0px'
            //     }
            //     console.log('true');
            // }
        // if (document.querySelector('.accordion-heading').classList.contains('active-style')) {
            //     document.querySelector('.accordion-heading').classList.remove('active-style')
            //     document.querySelector('.accordion-block').classList.remove('active-content')
            //     document.querySelector('.accordion-block').style.maxHeight = '0px'
            //     console.log('true');
            // }
            this.classList.toggle('active-style')
            this.nextElementSibling.classList.toggle('active-content')
            
            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'
            } else {
                this.nextElementSibling.style.maxHeight = '0px'
            }

        })
    })

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown')
    // })

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style')
    //             })

    //             this.classList.add('active', 'active-style')
    //         }
    //     })
    // })
}

export default accordion