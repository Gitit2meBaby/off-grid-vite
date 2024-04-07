document.addEventListener('DOMContentLoaded', () => {

    const quoteContainer = document.createElement('div')

    quoteContainer.innerHTML = `
    <button id="backBtn" class="close-quote-btn">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>
    </button>
    <div class="main-title">
        <h1>Please enter your contact details</h1>
        <img src="/assets/logo100.webp" alt="Off Grid Power logo">
    </div>
    <form id="form" action="https://formsubmit.co/el/vizaca" method="POST">

    <input type="text" name="_honey" style="display:none">
    <input type="hidden" name="_next" value="https://app.netlify.com/sites/earnest-lollipop-05bf54/overview">
    
    <div class="details">
            <label for="name">Name<span class='required'>*</span></label>
            <input autocomplete="on" type="text" id="name" name="name" required aria-label="Name">

            <label for="email">Email<span class='required'>*</span></label>
            <input autocomplete="on" type="email" id="email" name="email" required aria-label="Email">

            <label for="phone">Phone</label>
            <input autocomplete="on" type="tel" id="phone" name="phone" required aria-label="Phone">

            <label for="address">Address</label>
            <input autocomplete="on" type="text" id="address" name="address" required aria-label="Address">
        </div>

        <div class="add-title">
            <p id="additionalInformation">Additional Information</p>
            <svg stroke="#595959" fill="currentColor" stroke-width=".4" viewBox="0 0 16 16" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                    clip-rule="evenodd"></path>
            </svg>
        </div>

        <div id="formDropdown">
            <div class="radios">
            <div class="power-requirement">
            <p id="powerRequirementLabel">Power Requirement</p>
            <label>
                <input type="radio" id="oneTwo" name="power" value="1-2 People" checked aria-labelledby="powerRequirementLabel">
                1-2 People
            </label>
            <label>
                <input type="radio" id="twoFour" name="power" value="2-4 People" aria-labelledby="powerRequirementLabel">
                2-4 People
            </label>
            <label>
                <input type="radio" id="fourSix" name="power" value="4-6 People" aria-labelledby="powerRequirementLabel">
                4-6 People
            </label>
            <label>
                <input type="radio" id="commercial" name="power" value="Commercial Business" aria-labelledby="powerRequirementLabel">
                Commercial Business
            </label>
        </div>        

        <div class="system-size">
        <p id="systemSizeLabel">Size of system required</p>
        <label>
            <input type="radio" id="ten" name="size" value="3.3kW (10 Panels)" aria-labelledby="systemSizeLabel">
            3.3kW (10 Panels)
        </label>
        <label>
            <input type="radio" id="twenty" name="size" value="6.6kW (20 Panels)" aria-labelledby="systemSizeLabel">
            6.6kW (20 Panels)
        </label>
        <label>
            <input type="radio" id="twentyFour" name="size" value="8kW (24 Panels)" aria-labelledby="systemSizeLabel">
            8kW (24 Panels)
        </label>
        <label>
            <input type="radio" id="fourty" name="size" value="13.2kW (40 Panels)" aria-labelledby="systemSizeLabel">
            13.2kW (40 Panels)
        </label>
        <label>
            <input type="radio" id="fourtyFour" name="size" value="16kW (44 Panels)" aria-labelledby="systemSizeLabel">
            16kW (44 Panels)
        </label>
        <label>
            <input type="radio" id="greater" name="size" value="Greater than 16kW" aria-labelledby="systemSizeLabel">
            Greater than 16kW
        </label>
        <label>
            <input type="radio" id="notSure" name="size" value="I don't know please advise" checked aria-labelledby="systemSizeLabel">
            I don't know please advise
        </label>
    </div>    

    <div class="usage">
    <label for="usage">Average Daily Electricity Usage (kW)</label>
    <input type="number" id="usage" name="usage" required aria-labelledby="usageLabel">
    <!-- Use type="number" for numeric input -->
    
    <label for="hours">Percentage of Usage During Daylight Hours (%)</label>
    <input type="number" id="hours" name="hours" required aria-labelledby="hoursLabel">
</div>

            <div class="type">
            <p>Building Type</p>
            <label>
                <input type="checkbox" id="tin" name="type" value="Tin Roof">
                Tin Roof
            </label>
            <label>
                <input type="checkbox" id="tile" name="type" value="Tile Roof">
                Tile Roof
            </label>
            <label>
                <input type="checkbox" id="single" name="type" value="Single Story">
                Single Story
            </label>
            <label>
                <input type="checkbox" id="double" name="type" value="Double Story">
                Double Story
            </label>
            <label>
                <input type="checkbox" id="shed" name="type" value="Shed">
                Shed
            </label>
        </div>
        
            <div class="comments">
                <label for="comments">Please provide any additional comments / information here</label>
                <div class="textarea-wrapper">
                    <textarea placeholder="eg. your budget, are you currently connected to the grid..." name="comments"
                        id="comments" cols="" rows=""></textarea>
                </div>
            </div>
            <div class="btn-container">
            <button type="submit" id="submitForm" class="submit-btn">Submit</button>
            </div>
            </div>
        </div>
    </form>
`;

    const dialog = document.querySelector('.dialog')
    dialog.appendChild(quoteContainer)

    let isModalOpen = false
    const quoteBtns = document.querySelectorAll('.quoteBtn');
    const closeBtn = document.querySelector('#backBtn')

    quoteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            isModalOpen = true
            dialog.showModal()
        });
    });

    closeBtn.addEventListener('click', () => {
        isModalOpen = false
        dialog.close()
    })

    const addTitleText = document.querySelector('#additionalInformation')
    const addInfoTitle = document.querySelector('.add-title')
    const addInfoContent = document.querySelector('#formDropdown')

    addInfoTitle.addEventListener('click', () => {
        addInfoContent.classList.toggle('show-dropdown')
        addTitleText.classList.add('active-text')
    })


    const submitting = document.createElement('div')
    submitting.innerHTML = `
    <div class="submitting">
    <h2>Thank you for your submission!</h2>
    <p>Please Wait just a moment</p>
    </div>
    `

    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name === '' || email === '') {
            alert('Please fill in all required fields.');
            return;
        }
        form.submit();
        dialog.removeChild(quoteContainer)

        dialog.appendChild(submitting)
    });

    const submitBtn = document.querySelector('#submitForm')
    submitBtn.addEventListener('click', () => {
        dialog.removeChild(quoteContainer)
        dialog.appendChild(submitting)

        const submitTimer = () => {
            setTimeout(() => {
                dialog.removeChild(submitting)
                dialog.appendChild(quoteContainer)
                isModalOpen = false
                dialog.close()
            }, 3000)
        }

        submitTimer()
    })
});