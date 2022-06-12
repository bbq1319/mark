package kr.co.markncompany.mark.common.transfer;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class SuccessResponse<T> {

	private boolean isSuccess = true;
	private String successMsg = "success";
	private T data;

	public SuccessResponse(String successMsg){
		this.successMsg = successMsg;
	}

	public SuccessResponse(T data){
		this.data = data;
	}

	public SuccessResponse(String successMsg, T data) {
		this.successMsg = successMsg;
		this.data = data;
	}

}
