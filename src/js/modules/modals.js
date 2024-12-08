const modals = () => {
    let btnPressed = false;
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll()

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (destroy) {
                    item.remove()
                }

                btnPressed = true

                windows.forEach(item => {
                    item.style.display = 'none'
                    item.classList.add('animated', 'fadeIn')
                })
                
                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `${scroll}px`
            })
        })

        close.addEventListener('click', (e) => {
            console.log(e);
            windows.forEach(item => {
                item.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflow = ''
            document.body.style.marginRight = `0px`
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = 'none'
                })

                modal.style.display = 'none'
                document.body.style.overflow = ''
                document.body.style.marginRight = `0px`
            }
        })
    }

    function validateForm() {
        const modalForm = document.querySelector('.popup_calc'),
            inputs = modalForm.querySelectorAll('input[required]');
        let isValid = true;
        inputs.forEach(input => {
          if (input.value.trim() === '') {
            input.classList.add('invalid')
            isValid = false;
          } else {
            input.value = ''
            input.classList.remove('invalid')
          }
        });
        
        return isValid;
        
    }      
      
    // document.querySelector('.popup_calc_button').addEventListener('click', () => {
    //     const modalForm = document.querySelector('.popup_calc'),
    //         calcButton = document.querySelector('.popup_calc_button'),
    //         calcProfile = document.querySelector('.popup_calc_profile');
    //         let result = validateForm()
    //         if (modalForm && result) {
    //             calcButton.style.display = 'inline-block'
    //             calcProfile.style.display = 'block'
    //             modalForm.style.display = 'none'
    //         } else {
    //             alert('Пожалуйста, заполните все обязательные поля!')
    //         }
    // });

    // document.querySelector('.popup_calc_profile_close').addEventListener('click', () => {
    //     const calcProfile = document.querySelector('.popup_calc_profile');
    //         calcProfile.style.display = 'none'
    //         document.body.style.overflow = ''
    // })

    // return bindModal

    function calcScroll() {
        let div = document.createElement('div')
        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflowY = 'scroll'
        div.style.visibility = 'hidden'
        document.body.appendChild(div)
        let scrollWidth = div.offsetWidth - div.clientWidth
        div.remove()

        return scrollWidth
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block'
                }
            })

            if (!display ) {
                document.querySelector(selector).style.display = 'block'
                document.body.style.overflow = 'hidden'
                let scroll = calcScroll()
                document.body.style.marginRight = `${scroll}px`
            }
            
        }, time)
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >=
                scrollHeight)) {
                document.querySelector(selector).click()
            }
            // if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >=
            // document.documentElement.scrollHeight)) {
            //     document.querySelector(selector).click()
            // }
        })
    }

    // showModalByTime('.popup-consultation', 5000)
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
    openByScroll('.fixed-gift')
}

export default modals