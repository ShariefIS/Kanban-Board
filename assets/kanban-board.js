"use strict";

// Class definition

var KTKanbanBoardDemo = function () {

	// Private functions

	// Basic demo
	var demos = function () {

		// kanban 4
		var kanban4 = new jKanban({
			element: '#kanban4',
			gutter: '0',
			click: function (el) {
				alert(el.innerHTML);
			},
			boards: [
				{
					'id': '_board2',
					'title': 'To Do',
					'class': 'danger-light',
					'item': [
						{
							'title': '<div class="kt-kanban__badge"><div class="kt-kanban__image kt-media"><img src="https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image"></div><div class="kt-kanban__content"><div class="kt-kanban__title">Budget discussion</div><span class="kt-badge kt-badge--danger kt-badge--inline">To Do</span></div></div>',
						},
						{
							'title': '<div class="kt-kanban__badge"><div class="kt-kanban__image kt-media kt-media--danger"><span>SV</span></div><div class="kt-kanban__content"><div class="kt-kanban__title">Research Project Meeting</div><span class="kt-badge kt-badge--danger kt-badge--inline">To Do</span></div></div>',
						},
						{
							'title': '<div class="kt-kanban__badge"><div class="kt-kanban__image kt-media kt-media--danger"><span>MJ</span></div><div class="kt-kanban__content"><div class="kt-kanban__title">Majors Discussion</div><span class="kt-badge kt-badge--danger kt-badge--inline">To Do</span></div></div>',
						},
						{
							'title': '<div class="kt-kanban__badge"><div class="kt-kanban__image kt-media kt-media--danger"><span>LAB</span></div><div class="kt-kanban__content"><div class="kt-kanban__title">Lab Inspection</div><span class="kt-badge kt-badge--danger kt-badge--inline">To Do</span></div></div>',
						}
					]
				},
				{
					'id': '_board3',
					'title': 'In Progess',
					'class': 'brand-light',
					'item': [
						{
							'title': '<div class="kt-kanban__badge"><div class="kt-kanban__image kt-media"><img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image"></div><div class="kt-kanban__content"><div class="kt-kanban__title">On board New User</div><span class="kt-badge kt-badge--brand kt-badge--inline">In Progress</span></div></div>',
						},
						{
							'title': '<div class="kt-kanban__badge"><div class="kt-kanban__image kt-media kt-media--brand"><span>SB</span></div><div class="kt-kanban__content"><div class="kt-kanban__title">Quarter Sales Sept 2020</div><span class="kt-badge kt-badge--brand kt-badge--inline">Finalize End of Quarter Sales</span></div></div>',
						}
					]
				},
				{
					'id': '_board4',
					'title': 'Completed',
					'class': 'success-light',
					'item': [
						{
							'title': '<div class="kt-kanban__badge"><div class="kt-kanban__image kt-media kt-media--success"><span>FE</span></div><div class="kt-kanban__content"><div class="kt-kanban__title">Assign Tasks to Teams</div><span class="kt-badge kt-badge--success kt-badge--inline">Completed</span></div></div>',
						},
						{
							'title': '<div class="kt-kanban__badge"><div class="kt-kanban__image kt-media"><img src="https://images.pexels.com/photos/2102332/pexels-photo-2102332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image"></div><div class="kt-kanban__content"><div class="kt-kanban__title">Infrom Stake holders for Meeting</div><span class="kt-badge kt-badge--success kt-badge--inline">Completed</span></div></div>',
						}
					]
				},
			]
		});



		var addBoard = document.getElementById('addBoard');
		addBoard.addEventListener('click', function () {
			var boardTitle = $('#kanban-add-board').val();
			var boardId = '_' + $.trim(boardTitle);
			var boardColor = $('#kanban-add-board-color').val();
			var option = '<option value="' + boardId + '">' + boardTitle + '</option>';
			kanban4.addBoards(
				[{
					'id': boardId,
					'title': boardTitle,
					'class': boardColor
				}]
			);
			$('#kanban-select-task').append(option);
			$('#kanban-select-board').append(option);
		});

		var addTask = document.getElementById('addTask');
		addTask.addEventListener('click', function () {
			var target = $('#kanban-select-task').val();
			var title = $('#kanban-add-task').val();
			var taskColor = $('#kanban-add-task-color').val();
			kanban4.addElement(
				target,
				{
					'title': title,
					'class': taskColor
				}
			);
		});

		var removeBoard2 = document.getElementById('removeBoard2');
		removeBoard2.addEventListener('click', function () {
			var target = $('#kanban-select-board').val();
			kanban4.removeBoard(target);
			$('#kanban-select-task option[value="' + target + '"]').remove();
			$('#kanban-select-board option[value="' + target + '"]').remove();
		});
	}

	return {
		// public functions
		init: function () {
			demos();
		}
	};
}();

jQuery(document).ready(function () {
	KTKanbanBoardDemo.init();
});