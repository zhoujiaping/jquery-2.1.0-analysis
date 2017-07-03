$.fn.extend({
	/**head:[{
	 	field:'name',
	 * 	title:'姓名'
	 * },{
	 * 	field:'age',
	 *  title:'年龄'
	 * },{
	 * 	field:'job',
	 *  title:'工作'
	 * },{
	 * 	field:'title',
	 *  title:'头衔'
	 * }]
	 * body:[{name:'zhoujiaping',age:28,job:'programer',title:'高级java工程师'},{name:'zhoujiaping',age:28,job:'programer',title:'高级java工程师'}]
	 * */
	table:function({head,body}){
		const ths = head.map(item=>{
			return `<th>${item.title}</th>`;
		}).join('');
		const thead = `<thead><tr>${ths}</tr></thead>`;
		const tbodyTrs = body.map(row=>{
			const tds = head.map((item,index,array)=>{
				return `<td>${row[item.field]}</td>`;
			}).join('');
			return `<tr>${tds}</tr>`;
		}).join('');
		const tbody = `<tbody>${tbodyTrs}</tbody>`;
		const html = `<table>${thead}${tbody}</table>`;
		this.append(html);
		return this;
	}
	/*table:function({head,body}){
		const html = ['<table>'];
		const headerTr = head.map(item=>{
			return `<th>${item.title}</th>`;
		}).join('');
		html.push('<thead><tr>');
		html.push(headerTr);
		html.push('</tr></thead>');
		const bodyTrs = body.map(row=>{
			const tr = ['<tr>'];
			head.forEach((item,index,array)=>{
				tr.push(`<td>${row[item.field]}</td>`);
			});
			tr.push('</tr>');
			return tr.join('');
		});
		html.push('<tbody>');
		html.push(bodyTrs.join(''));
		html.push('</tbody>');
		html.push('</table>');
		this.append(html.join(''));
		return this;
	}*/
});
