$(document).ready(function() {

	var code = $('#emoss')[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers: true,
        mode: 'css',
        theme: 'Base2Tone-Cave-light'
	});
	var code2 = $('#css')[0];
	var editor2 = CodeMirror.fromTextArea(code2, {
		lineNumbers: true,
		mode: 'css',
		theme: 'Base2Tone-Cave-light'
    });
    
    var codeMirrorHeight = $(window).height() - 134;

	editor.setSize(null, codeMirrorHeight);
	editor2.setSize(null, codeMirrorHeight);

	editor.getDoc().setValue(exampleVal);
    editor2.getDoc().setValue(exampleVal2);

	editor2.autoFormatRange({ line: 0, ch: 0 }, { line: 0 });
    editor2.setCursor({ line: 0, ch: 0 });
    
    var darkModeElements = ['main', 'header', 'header__button', 'footer', 'octocat'];
    $("#switch-btn").click(function(){
        for (const e of darkModeElements) {
            $('.' + e).toggleClass(e + '--dark');
            
            if (editor.getOption('theme') === 'Base2Tone-Cave-light') {
                editor.setOption('theme', 'Base2Tone-Cave-dark');
                editor2.setOption('theme', 'Base2Tone-Cave-dark');
            } else {
                editor.setOption('theme', 'Base2Tone-Cave-light');
                editor2.setOption('theme', 'Base2Tone-Cave-light');
            }
        }
    }); 

    $("#compile-btn").click(function(){
        let input = editor.getValue();
        $.ajax({
            url: '/compile', 
            type: 'POST', 
            data: {code: input},
            contentType: 'application/x-www-form-urlencoded',
        }).done(function(output){ 
            editor2.getDoc().setValue(output);
            editor2.autoFormatRange({ line: 0, ch: 0 }, { line: 0 });
	        editor2.setCursor({ line: 0, ch: 0 });
         });
    });
});

var exampleVal = `/**** EMOSS Code to Generate Stylesheet for This Page ****
 **** Dark Mode Built inside ****
 **** Play around with it. Enjoy! ****/
@block header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6.5rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    
    @mod dark {
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;

        & button {
            color: #eee;
        }
    }

    @elem title {
        display: inline;

        & sup {
            color: #ad1f51;
            font-size: 60%;
        }
    }

    @elem subtitle {
        display: inline;
    }

    @elem description {
        display: inline;
        font-size: 15px;
    }

    @elem button {
        background-color: #f8d273;
        border-color: #f8d273;

        &:hover {
            background-color: #f0bb36;
            border-color: #f0bb36;
        }

        &:focus {
            background-color: #f0bb36;
            border-color: #f0bb36;
        }

        @mod dark {
        background-color: #9c818b;
        border-color: #9c818b;

            &:hover {
                background-color: #875e6d;
                border-color: #875e6d;
            }

            &:focus {
                background-color: #875e6d;
                border-color: #875e6d;
            }
        }
    }

}


@block main {
    background-color: #fcfcfc;
    
    @mod dark {
        background-color: #1b1b1b;

        & p {
            color: #e7e7e7;
        }

        & h3 {
            color: #e7e7e7;
        }
    }
}

@block footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6.5rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 13px;
    font-weight: 600;
    
    @mod dark {
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
    }

    & a {
        color: #cca133; 
        text-decoration: none;
    }

    & a:hover {
        color: #f0bb36; 
        text-decoration: none;
    }

    & span {
        color: #ad1f51; 
    }
}

@block octocat {
    fill:#1f1f1f;
    color:#444;
    position:absolute;
    top:0;
    border:0;
    right:0;

    @mod dark {
        fill:#444;
        color:#eee;
    }

    &:hover {
        color:#f0bb36;
    }
}`;

var exampleVal2 = `.header{display:flex;justify-content:space-between;align-items:center;width:100%;height:6.5rem;border-top:1px solid #eee;border-bottom:1px solid #eee;}.header--dark{border-top:1px solid #000;border-bottom:1px solid #000;}.header--dark button{color:#eee;}.header__title{display:inline;}.header__title sup{color:#ad1f51;font-size:60%;}.header__subtitle{display:inline;}.header__description{display:inline;font-size:15px;}.header__button{background-color:#f8d273;border-color:#f8d273;}.header__button:hover{background-color:#f0bb36;border-color:#f0bb36;}.header__button:focus{background-color:#f0bb36;border-color:#f0bb36;}.header__button--dark{background-color:#9c818b;border-color:#9c818b;}.header__button--dark:hover{background-color:#875e6d;border-color:#875e6d;}.header__button--dark:focus{background-color:#875e6d;border-color:#875e6d;} .main{background-color:#fcfcfc;}.main--dark{background-color:#1b1b1b;}.main--dark p{color:#e7e7e7;}.main--dark h3{color:#e7e7e7;} .footer{display:flex;justify-content:space-between;align-items:center;width:100%;height:6.5rem;border-top:1px solid #eee;border-bottom:1px solid #eee;font-size:13px;font-weight:600;}.footer--dark{border-top:1px solid #000;border-bottom:1px solid #000;}.footer a{color:#cca133;text-decoration:none;}.footer a:hover{color:#f0bb36;text-decoration:none;}.footer span{color:#ad1f51;} .octocat{fill:#1f1f1f;color:#444;position:absolute;top:0;border:0;right:0;}.octocat--dark{fill:#444;color:#eee;}.octocat:hover{color:#f0bb36;}`;



