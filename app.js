$(() => {
  let currentImgIndex = 0;
  let highestIndex = $('.carousel-images').children().length-1;

  $('.next').on('click', () => {
    const $img = $('.carousel-images').children().eq(currentImgIndex);
    $img.css('display', 'none');
    currentImgIndex++;
    if (currentImgIndex > highestIndex){
      currentImgIndex = 0;
    }
    const $img2 = $('.carousel-images').children().eq(currentImgIndex);
    $img2.css('display', 'block');
  });

  $('.prev').on('click', () => {
    const $img = $('.carousel-images').children().eq(currentImgIndex);

    $img.css('display', 'none');

    currentImgIndex--;

    if (currentImgIndex < 0){
      currentImgIndex = highestIndex;
    }

    const $img2 = $('.carousel-images').children().eq(currentImgIndex);
    $img2.css('display', 'block');
    });

  $('#character').hide();
  $('#planet').hide();
  $('#starship').hide();
  $('#species').hide();
  $('#vehicle').hide();
  $('#film').hide();

  $('#character-btn').on('click', () => {
    $('#character').toggle();
    $('#planet').hide();
    $('#starship').hide();
    $('#species').hide();
    $('#film').hide();
    $('#vehicle').hide();
  })

  $('#planet-btn').on('click', () => {
    $('#character').hide();
    $('#planet').toggle();
    $('#starship').hide();
    $('#species').hide();
    $('#film').hide();
    $('#vehicle').hide();
  })

  $('#starship-btn').on('click', () => {
    $('#character').hide();
    $('#planet').hide();
    $('#starship').toggle();
    $('#species').hide();
    $('#film').hide();
    $('#vehicle').hide();
  })

  $('#species-btn').on('click', () => {
    $('#character').hide();
    $('#planet').hide();
    $('#starship').hide();
    $('#species').toggle();
    $('#film').hide();
    $('#vehicle').hide();
  })

  $('#film-btn').on('click', () => {
    $('#character').hide();
    $('#planet').hide();
    $('#starship').hide();
    $('#species').hide();
    $('#film').toggle();
    $('#vehicle').hide();
  })

  $('#vehicle-btn').on('click', () => {
    $('#character').hide();
    $('#planet').hide();
    $('#starship').hide();
    $('#species').hide();
    $('#film').hide();
    $('#vehicle').toggle();
  });
  $('#characterForm').on('submit', (event) => {

    event.preventDefault();

    const usersInput = $('#characterForm input[type="text"]').val();

    $.ajax({
      url:'https://swapi.co/api/people/?search=' + usersInput,
    }).then(
      (data) => {
        console.log(data);
        const $characterReturnData = data.results[0];
        console.log($characterReturnData);
        $('#character-name').text($characterReturnData.name);
        $('#hair-color').text($characterReturnData.hair_color);
        $('#eye-color').text($characterReturnData.eye_color);
        $('#birth-year').text($characterReturnData.birth_year);
        $('#character-height').text($characterReturnData.height);
        $('#character-weight').text($characterReturnData.mass);
      },
      (error) => {
        console.log('Not working, mate!');
      }
    )
  });
  $('#planetForm').on('submit', (event) => {
    event.preventDefault();

    const usersInput = $('#planetForm input[type="text"]').val();

    $.ajax({
      url:'https://swapi.co/api/planets/?search=' + usersInput,
    }).then(
      (data) => {
        console.log($('input[type="text"]'));
        console.log(usersInput);
        console.log(data);
        const $planetReturnData = data.results[0];
        console.log($planetReturnData);
        $('#planet-name').text($planetReturnData.name);
        $('#climate').text($planetReturnData.climate);
        $('#planet-diameter').text($planetReturnData.diameter);
        $('#population').text($planetReturnData.population);
        $('#gravity').text($planetReturnData.gravity);
        },
      (error) => {
        console.log('Not working, mate!');
      }
    )
  });
  $('#starshipForm').on('submit', (event) => {
    event.preventDefault();

    const usersInput = $('#starshipForm input[type="text"]').val();

    $.ajax({
      url:'https://swapi.co/api/starships/?search=' + usersInput,
    }).then(
      (data) => {
        console.log(data);
        const $starshipReturnData = data.results[0];
        console.log($starshipReturnData);
        $('#starshipName').text($starshipReturnData.name);
        $('#crew').text($starshipReturnData.crew);
        $('#length').text($starshipReturnData.length);
        $('#passengers').text($starshipReturnData.passengers);
        $('#cargocapacity').text($starshipReturnData.cargo_capacity);
        $('#cost').text($starshipReturnData.cost_in_credits);
        },
      (error) => {
        console.log('Not working, mate!');
      }
    )
  });
  $('#speciesForm').on('submit', (event) => {
    event.preventDefault();

    const usersInput = $('#speciesForm input[type="text"]').val();

    $.ajax({
      url:'https://swapi.co/api/species/?search=' + usersInput,
    }).then(
      (data) => {
        console.log(data);
        const $speciesReturnData = data.results[0];
        $('#species-name').text($speciesReturnData.name);
        $('#classification').text($speciesReturnData.classification);
        $('#designation').text($speciesReturnData.designation);
        $('#average-height').text($speciesReturnData.average_height);
        $('#skin-colors').text($speciesReturnData.skin_colors);
        $('#hair-colors').text($speciesReturnData.hair_colors);
        $('#eye-colors').text($speciesReturnData.eye_colors);
        $('#average-lifespan').text($speciesReturnData.average_lifespan);
        $('#language').text($speciesReturnData.language);
        },
      (error) => {
        console.log('Not working, mate!');
      }
    )
  });
  $('#filmForm').on('submit', (event) => {
    event.preventDefault();

    const usersInput = $('#filmForm input[type="text"]').val();

    $.ajax({
      url:'https://swapi.co/api/films/?search=' + usersInput,
    }).then(
      (data) => {
        console.log(data);
        const $filmReturnData = data.results[0];
        $('#film-title').text($filmReturnData.title);
        $('#episode-number').text($filmReturnData.episode_id);
        $('#director').text($filmReturnData.director);
        $('#producer').text($filmReturnData.producer);
        $('#release-date').text($filmReturnData.release_date);
        },
      (error) => {
        console.log('Not working, mate!');
      }
    )
  });
  $('#vehicleForm').on('submit', (event) => {
    event.preventDefault();

    const usersInput = $('#vehicleForm input[type="text"]').val();

    $.ajax({
      url:'https://swapi.co/api/vehicles/?search=' + usersInput,
    }).then(
      (data) => {
        console.log(data);
        const $vehicleReturnData = data.results[0];
        $('#vehicle-name').text($vehicleReturnData.name);
        $('#vehicle-model').text($vehicleReturnData.model);
        $('#vehicle-manufacturer').text($vehicleReturnData.manufacturer);
        $('#vehicle-cost').text($vehicleReturnData.cost_in_credits);
        $('#vehicle-length').text($vehicleReturnData.length);
        $('#vehicle-crew').text($vehicleReturnData.crew);
        $('#vehicle-passengers').text($vehicleReturnData.passengers);
        $('#vehicle-cargo-capacity').text($vehicleReturnData.cargo_capacity);
        $('#vehicle-class').text($vehicleReturnData.vehicle_class);
      },
      (error) => {
        console.log('Not working, mate!');
      }
    )
  });
});
