var addComment = {
	moveForm : function(commId, parentId, respondId) {
	        var t = this, div, comm = t.I(commId), respond = t.I(respondId), cancel = t.I('cancel-comment-reply'), parent = t.I('id_parent');

		if ( ! comm || ! respond || ! cancel || ! parent )
			return;

		t.respondId = respondId;

		if ( ! t.I('temp-form-div') ) {
			div = document.createElement('div');
			div.id = 'temp-form-div';
			div.style.display = 'none';
			respond.parentNode.insertBefore(div, respond);
		}

		comm.parentNode.parentNode.insertBefore(respond, comm.parentNode.nextSibling);
		parent.value = parentId;
		cancel.style.display = '';
		comm.style.display = 'none';

		cancel.onclick = function() {
			var t = addComment, temp = t.I('temp-form-div'), respond = t.I(t.respondId);

			if ( ! temp || ! respond )
				return;

			t.I('id_parent').value = '';
			temp.parentNode.insertBefore(respond, temp);
			temp.parentNode.removeChild(temp);
			this.style.display = 'none';
			comm.style.display = '';

			this.onclick = null;
			return false;
		};

		try { t.I('id_comment').focus(); }
		catch(e) {}

		return false;
	},

	I : function(e) {
		return document.getElementById(e);
	}
};

$('.comment-form-csrf-token').each(function(){
	var csrf = document.cookie.match(/csrftoken=(\w+)\b/);
	if (csrf === null) {
		$(this).parent().remove();
	}
	csrf = csrf[1];
	$(this).append($('<input>', {'type': 'hidden', 'name': 'csrfmiddlewaretoken', 'value': csrf}));
});

$('[data-action="comment-fold"]').click(function(){
	$(this).toggleClass('-closed');
	$(this).parents('.comment-list__item').first().find('.comment-children').slideToggle();
});
