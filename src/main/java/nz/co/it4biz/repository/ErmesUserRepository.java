package nz.co.it4biz.repository;

import nz.co.it4biz.domain.ErmesUser;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ErmesUser entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ErmesUserRepository extends JpaRepository<ErmesUser, Long> {

}
