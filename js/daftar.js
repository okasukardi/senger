// JavaScript Document
$(document).ready(function () {

    "use strict";

    $(".register-form").submit(function (e) {
        e.preventDefault();
        var nama = $(".nama");
        var nik = $(".nik");
        var ttl = $(".ttl");
        var alamat = $(".alamat");
        var wa = $(".wa");
        var Agama = $(".Agama");
        var asalsekolah = $(".asalsekolah");
        var jurusan = $(".jurusan");
        var thlulus = $(".thlulus");
        var email = $(".email");
        var facebook = $(".facebook");
        var instagram = $(".instagram");
        var pilihprogram = $(".pilihprogram");
        var siformasi = $(".snformasi");
        var flag = false;
        if (nama.val() == "") {
            nama.closest(".form-control").addClass("error");
            nama.focus();
            flag = false;
            return false;
        } else {
            nama.closest(".form-control").removeClass("error").addClass("success");
        }
        if (nik.val() == "") {
            nik.closest(".form-control").addClass("error");
            nik.focus();
            flag = false;
            return false;
        } else {
            nik.closest(".form-control").removeClass("error").addClass("success");
        }
        if (ttl.val() == "") {
            ttl.closest(".control-group").addClass("error");
            ttl.focus();
            flag = false;
            return false;
        } else {
            ttl.closest(".control-group").removeClass("error").addClass("success");
            flag = true;
        }
        if (alamat.val() == "") {
            alamat.closest(".form-control").addClass("error");
            alamat.focus();
            flag = false;
            return false;
        } else {
            alamat.closest(".form-control").removeClass("error").addClass("success");
        }
        if (wa.val() == "") {
            wa.closest(".form-control").addClass("error");
            wa.focus();
            flag = false;
            return false;
        } else {
            wa.closest(".form-control").removeClass("error").addClass("success");
        }
        if (Agama.val() == "") {
            Agama.closest(".form-control").addClass("error");
            Agama.focus();
            flag = false;
            return false;
        } else {
            Agama.closest(".form-control").removeClass("error").addClass("success");
        }
        if (asalsekolah.val() == "") {
            asalsekolah.closest(".form-control").addClass("error");
            asalsekolah.focus();
            flag = false;
            return false;
        } else {
            asalsekolah.closest(".form-control").removeClass("error").addClass("success");
        }
        if (jurusan.val() == "") {
            jurusan.closest(".form-control").addClass("error");
            jurusan.focus();
            flag = false;
            return false;
        } else {
            jurusan.closest(".form-control").removeClass("error").addClass("success");
        }
        if (thlulus.val() == "") {
            thlulus.closest(".form-control").addClass("error");
            thlulus.focus();
            flag = false;
            return false;
        } else {
            thlulus.closest(".form-control").removeClass("error").addClass("success");
        }
        if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        }
        if (facebook.val() == "") {
            facebook.closest(".form-control").addClass("error");
            facebook.focus();
            flag = false;
            return false;
        } else {
            facebook.closest(".form-control").removeClass("error").addClass("success");
        }
        if (instagram.val() == "") {
            instagram.closest(".form-control").addClass("error");
            instagram.focus();
            flag = false;
            return false;
        } else {
            instagram.closest(".form-control").removeClass("error").addClass("success");
        }
        if (pilihprogram.val() == "") {
            pilihprogram.closest(".form-control").addClass("error");
            pilihprogram.focus();
            flag = false;
            return false;
        } else {
            pilihprogram.closest(".form-control").removeClass("error").addClass("success");
        }
        if (siformasi.val() == "") {
            siformasi.closest(".form-control").addClass("error");
            siformasi.focus();
            flag = false;
            return false;
        } else {
            siformasi.closest(".form-control").removeClass("error").addClass("success");
        }
        var dataString = "nama=" + nama.val() + "&nik=" + nik.val() + "&ttl=" + ttl.val() + "&alamat=" + alamat.val() + "&wa=" + wa.val() + "&agama=" + Agama.val() + "&asalsekolah=" + asalsekolah.val() + "&jurusan=" + jurusan.val() + "&thlulus=" + thlulus.val() + "&email=" + email.val() + "&facebook=" + facebook.val() + "&instagram=" + instagram.val() + "&pilihprogram=" + pilihprogram.val() + "&siformasi=" + siformasi.val();
        $(".loading").fadeIn("slow").html("Loading...");
        $.ajax({
            type: "POST",
            data: dataString,
            url: "php/daftar.php",
            cache: false,
            success: function (d) {
                $(".form-control").removeClass("success");
                if (d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
                    $('.loading').fadeIn('slow').html('<font color="#00ca11">Data berhasil terkirim...</font>').delay(3000).fadeOut('slow');
                else
                    $('.loading').fadeIn('slow').html('<font color="#18ce00">Data tidak terkirim!</font>').delay(3000).fadeOut('slow');

            }
        });
        return false;
    });
    $("#reset").on('click', function () {
        $(".form-control").removeClass("success").removeClass("error");
    });
})