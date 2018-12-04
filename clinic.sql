
delimiter //

create procedure spUserAppt
(userid int)
begin 
	select * from appointments
    join users u on u.id = userid;
end//

call spUserAppt(3);
