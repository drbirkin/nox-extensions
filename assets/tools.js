

;(function($, window, document, undefined) {
  
    'use strict';
    
    var $html = $('html');
    
    $html.on('click.ui.dropdown', '.js-dropdown', function(e) {
      e.preventDefault();
      $(this).toggleClass('is-open');
    });
    
    $html.on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function(e) {
      e.preventDefault();
      var $item = $(this);
      var $dropdown = $item.parents('.js-dropdown');
      $dropdown.find('.js-dropdown__input').val($item.data('dropdown-value'));
      $dropdown.find('.js-dropdown__current').text($item.text());
    });
    
    $html.on('click.ui.dropdown', function(e) {
      var $target = $(e.target);
      if (!$target.parents().hasClass('js-dropdown')) {
        $('.js-dropdown').removeClass('is-open');
      }
    });
    
    
  })(jQuery, window, document);

  $(document).ready(function(){
    $("#tab1").click(function(){
      $("#tabContent1").slideToggle('slow');
      
      if($(this).hasClass('folded')) {
        $("#tab1").removeClass('folded');
      } 
      else
      {
        $("#tab1").addClass('folded');
      }
    });

    $("#tab2").click(function(){
      $("#tabContent2").slideToggle('slow');
      
      if($(this).hasClass('folded')) {
        $("#tab2").removeClass('folded');
      } 
      else
      {
        $("#tab2").addClass('folded');
      }
    });

    $("#tab3").click(function(){
      $("#tabContent3").slideToggle('slow');
      
      if($(this).hasClass('folded')) {
        $("#tab3").removeClass('folded');
      } 
      else
      {
        $("#tab3").addClass('folded');
      }
    });

    $("#tab4").click(function(){
      $("#tabContent4").slideToggle('slow');
      
      if($(this).hasClass('folded')) {
        $("#tab4").removeClass('folded');
      } 
      else
      {
        $("#tab4").addClass('folded');
      }
    });

    $("#tab5").click(function(){
      $("#tabContent5").slideToggle('slow');
      
      if($(this).hasClass('folded')) {
        $("#tab5").removeClass('folded');
      } 
      else
      {
        $("#tab5").addClass('folded');
      }
    });

    $("#start1").click(function(){
      $("#start1").addClass('deactive');
      $("#stop1").removeClass('deactive');
      $("#monitorStatus1").removeClass('deactive');
    });

    $("#stop1").click(function(){
      $("#stop1").addClass('deactive');
      $("#start1").removeClass('deactive');
      $("#monitorStatus1").addClass('deactive');
    });

    $("#start2").click(function(){
      $("#start2").addClass('deactive');
      $("#stop2").removeClass('deactive');
      $("#monitorStatus2").removeClass('deactive');
    });

    $("#stop2").click(function(){
      $("#stop2").addClass('deactive');
      $("#start2").removeClass('deactive');
      $("#monitorStatus2").addClass('deactive');
    });

    $(".sectionContent").scroll(function(){
      $(".sectionTitle").addClass('moved');
    });


    $("#kw").keypress(function(e){
        var valueofinput= $(this).val();
        if(e.which==32 && valueofinput.charAt(0) === "+" )
        {
            e.preventDefault();
            $('#inputs').append('<span class="plusTag tag">' + valueofinput + '</span>');
            var d = $('#kw').val('');
            //$('#kw').val(d.slice(0,-1))
        }
        else if(e.which==32 && valueofinput.charAt(0) === "-" )
        {
            e.preventDefault();
            $('#inputs').append('<span class="minusTag tag">' + valueofinput + '</span>');
            var d = $('#kw').val('');
            //$('#kw').val(d.slice(0,-1))
        }
    });

    $(document).on('click', '.tag', function(){
        $(this).remove();
    });

    $(document).on('click', '#check', function(){
      if($(this).parent().parent().hasClass('activated')) {
        $(this).parent().parent().removeClass('activated');
      } 
      else
      {
        $(this).parent().parent().addClass('activated');
      }
      
  });

    $('.inputholder1').click(function() { $('#kw').focus(); });

    $("#kw2").keypress(function(e){
      var valueofinput= $(this).val();
      if(e.which==32 && valueofinput.charAt(0) === "+" )
      {
          e.preventDefault();
          $('#inputs2').append('<span class="plusTag tag">' + valueofinput + '</span>');
          var d = $('#kw2').val('');
          //$('input').val(d.slice(0,-1))
      }
      else if(e.which==32 && valueofinput.charAt(0) === "-" )
      {
          e.preventDefault();
          $('#inputs2').append('<span class="minusTag tag">' + valueofinput + '</span>');
          var d = $('#kw2').val('');
          //$('input').val(d.slice(0,-1))
      }
      });
      $(document).on('click', '.tag', function(){
          $(this).remove();
    });
    $('.inputholder2').click(function() { $('#kw2').focus(); });

   /*  $('#sameBilling').click(function(){
      $('#delivery').toggle($('#sameBilling').is(':checked'));
    }); */
    $('#sameBilling').click(function(){
      if($("#sameBilling").is(':checked')){
        $("#delivery").hide();
      }
      else {
        $("#delivery").show(); 
      }
    });

  });
