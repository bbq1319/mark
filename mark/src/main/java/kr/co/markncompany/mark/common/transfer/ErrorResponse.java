package kr.co.markncompany.mark.common.transfer;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ErrorResponse {

    private boolean isSuccess = false;
    private String error;

    public ErrorResponse(String error) {
        this.error = error;
    }

}
